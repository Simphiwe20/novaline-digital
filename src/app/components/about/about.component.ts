import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
// typical import
import gsap from "gsap";
import { Draggable, Flip, MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnChanges {

  @Output() isReadMore = new EventEmitter<boolean>()
  @Input() isShowMore: boolean = false
 values: any[] = [
  { name: 'Innovation', description: 'We embrace creativity and technology to deliver impactful solutions.', icon: '../../../assets/innovation.svg'},
  { name: 'Integrity', description: 'We operate with honesty, transparency, and accountability in all we do.', icon: '../../../assets/intergrity.svg'},
  { name: 'Excellence', description: 'We strive for the highest quality in every project and client interaction.', icon: '../../../assets/excellence.svg'},
  { name: 'Client Success', description: 'Our goal is to help businesses grow, achieve results, and thrive online.', icon: '../../../assets/interview.svg'},
  { name: 'Collaboration', description: 'We believe teamwork and open communication lead to the best outcomes.', icon: '../../../assets/collaboration.svg'},
  { name: 'Continuous Learning', description: 'We stay ahead by constantly learning and adapting to new technologies and trends.', icon: '../../../assets/learning.svg' }
];



  ngOnChanges(changes: SimpleChanges): void {
    this.isShowMore = this.isShowMore
  }

  ngAfterViewInit(): void {
    gsap.from('.about-anime', {
      duration: 1,
      y: 150,
      x: -100,
      delay: 0.8,
      stagger: .3,
      opacity: 0,
      scrollTrigger: '.about-anime'
    })
    gsap.from('.title', {
      duration: 1.5,
      y: 50,
      x: -150,
      opacity: 0,
      scrollTrigger: '.title'
    })
  }

  showMore(): void {
    this.isShowMore = true
    this.isReadMore.emit(true)
  }


}
