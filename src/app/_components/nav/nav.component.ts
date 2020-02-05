import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AnimalService } from 'src/app/_services/animal.service';
import { AnimalModel } from 'src/app/_models/animalModel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.refresh();
    this.items = [
      { title: 'Home', icon: 'home', link: '/home' },
      { title: 'Animal', icon: 'github', link: '/animal' },
      { title: 'Pet', icon: 'box', children: [
        
      ] }
    ]
    this.animalService.context$.subscribe(x => this.items.find(
      i => i.title == 'Pet').children = x.map(a => {
          return { title: a.name, link: '/pet/' + a.name };
        }
      ));
  }

}
