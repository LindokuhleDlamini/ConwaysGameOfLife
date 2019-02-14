import { Component, OnInit } from '@angular/core';
import { PatternBuilder } from '../builders/pattern-builder';

@Component({
    selector: 'app-pattern-dropdown',
    templateUrl: './pattern-dropdown.component.html',
    styleUrls: ['./pattern-dropdown.component.css']
  })

export class PatternDropdown implements OnInit {

    public patternBuilder: PatternBuilder;

    ngOnInit() {
        this.patternBuilder = new PatternBuilder();
    }

    public patternCreator(pattern: string) {
        this.patternBuilder.build(pattern);
    }
}