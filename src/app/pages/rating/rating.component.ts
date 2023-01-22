import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 rating = 0;
 starCount = 5;
 ratingArr: boolean[] = [];

 snackBarDuration = 1000;
 response =[
  'You broke my heart',
  'Really',
  'We will do better next time',
  'Glad you like it',
  'Thank you so much'
 ]
  movieId: any;

  constructor(private snackBar: MatSnackBar) {
    this.ratingArr = Array(this.starCount).fill(false);
   }

  ngOnInit(): void {
    
    };
    returnStar(i: number) {
      if (this.rating >= i + 1) {
        return 'star';
      }
      else{
       return 'star_border'; 
      }
    }

    onClick(i: number) {
      this.rating = i + 1;
      this.snackBar.open(this.response[i], '',{
        duration: this.snackBarDuration,
        panelClass: ['snack-bar']
      });
    }
    onSubmit() {
    // Make an HTTP post request to save the rating in the database
    console.log(`Rating submitted for movie with id ${this.movieId}`);
  }
  }



