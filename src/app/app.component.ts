import { Component } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  

  bigTitle = ['Posts'] ;
  
  postList = [
    {
      title: 'Le Mainframe',
      createdAt: new Date(),
      content: 'Un ordinateur central ou un macroordinateur (mainframe computer), est un ordinateur de grande puissance de traitement et qui sert d"unité centrale à un réseau de terminaux.'
    },
    {
      title: 'Angular',
      createdAt: new Date(),
      content: 'Angular est un cadriciel côté client open source basé sur TypeScript dirigée par l\'équipe du projet Angular à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, cadriciel construit par la même équipe.'
    },
    {
      title: 'Java',
      createdAt: new Date(),
      content: 'Java est une technique informatique développée initialement par Sun Microsystems puis rachetée par Oracle. Défini à l\'origine comme un langage de programmation, Java a évolué pour devenir un ensemble cohérent d\'éléments techniques et non techniques.'
      
    }
  ];
  
  constructor() {
  }

  ngOnInit() {
  }
}
