import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';



@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent {

  constructor(private service: MovieApiServiceService){}

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any =[];
  animationMovieResult: any =[];
  comedyMovieResult: any = [];
  sciencefictionResult: any = [];
  documentaryMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void{
  this.bannerData();
  this.trendingData();
  this.actionMovie();
  this.adventureMovie();
  this.animationMovie();
  this.comedyMovie();
  this.sciencefiction();
  this.documentaryMovie();
  this. thrillerMovie();
  }

  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData(){
   this.service.trendingMovieApiData().subscribe((result)=>{
    console.log(result,'trendingresult#')
     this.trendingMovieResult = result.results;
    //this is.trendingMovieResult
  }); 
  }
  //action Movies
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionMovies#');
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventureMovies#');
      this.adventureMovieResult = result.results;
    });
  }
   animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationMovies#');
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comedyMovies#');
      this.comedyMovieResult = result.results;
    });
  }
sciencefiction(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'scienceFictionMovies#');
      this.sciencefictionResult = result.results;
    });
  }

  documentaryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'DocumentaryMovies#');
      this.documentaryMovieResult = result.results;
    });
  }
  
   thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'ThrillerMovies#');
      this.thrillerMovieResult = result.results;
    });
   }
}
