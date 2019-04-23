import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string ;
  @Input() createdAt = new Date ;
  @Input() content: string ;
  
  loveIt: number;
    
  constructor() { 
  }
 
  ngOnInit() {
    this.loveIt = 0;
  }

  onLoveIt() {
   this.loveIt ++;
   }

  onDontLoveIt() {
    this.loveIt --;
   }
 
}
