import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/_services/breed.service';
import { breedModel } from 'src/app/_models/breedModel';
import { AnimalService } from 'src/app/_services/animal.service';
import { AnimalModel } from 'src/app/_models/animalModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  addBreedForm: FormGroup;
  allBreeds: breedModel[];
  allAnimals: AnimalModel[];
  
  constructor(
   private breedService: BreedService,
   private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.breedService.context$.subscribe(list => this.allBreeds = list);
    this.animalService.context$.subscribe(list => this.allAnimals = list);
    this.breedService.refresh();
    this.animalService.refresh();
    this.addBreedForm = new FormGroup({
      name: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ]
      )),
      animalName: new FormControl(null, Validators.compose([
        Validators.required
      ]))
    })
  }

  filterBreedsByAnimal(animal: AnimalModel){
    return this.allBreeds.filter(breed => breed.animalName == animal.name);
  }

  add(){
    this.breedService.insert(this.addBreedForm.value).subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    )
  }

  delete(breed: breedModel){
    this.breedService.delete(breed.id).subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    )
  }

}
