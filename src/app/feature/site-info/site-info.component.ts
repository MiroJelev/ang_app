import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


export interface Card {
  frontImage:string;
  frontText:string;
  backText:string;
  backButtonText: string;
  backButtonURL: string;
  currentAnimationState: 'faceUp' | 'faceDown' | 'turning' | string;
  currentMouseState: 'faceUp' | 'faceDown';
}

const cards:Array<Card> = [
  {
    frontImage: "assets/database.png",
    frontText: "Database",
    backText: "The database is deployed in google cloud. The used dataset is Mondial",
    backButtonText: "GO TO THE DATASET",
    backButtonURL: "https://www.dbis.informatik.uni-goettingen.de/Mondial/",
    currentAnimationState: 'faceUp',
    currentMouseState: 'faceUp'
  },
  {
    frontImage: "assets/backend.png",
    frontText: "Backend",
    backText: "The REST backend implemented in Python",
    backButtonText: "GO TO THE BACKEND",
    backButtonURL: "https://github.com/MiroJelev/ang_api",
    currentAnimationState: 'faceUp',
    currentMouseState: 'faceUp'
  },
  {
    frontImage: "assets/angular_no_background.png",
    frontText: "Frontend",
    backText: "The frontend is implemented in Angular",
    backButtonText: "GO TO THE FRONTEND",
    backButtonURL: "https://github.com/MiroJelev/ang_app",
    currentAnimationState: 'faceUp',
    currentMouseState: 'faceUp'
  }
]

@Component({
  selector: 'app-site-info',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './site-info.component.html',
  styleUrl: './site-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('flip_card_right', [
      state('faceUp', style({ transform: 'rotate3d(0, 1, 0, 0deg)'})),
      state('faceDown', style({ transform: 'rotate3d(0, 1, 0, 360deg)'})),
      transition('faceUp <=> faceDown', [animate('.8s ease')])
    ])
  ]
})
export class SiteInfoComponent {
  cards: Array<Card> = cards;
}
