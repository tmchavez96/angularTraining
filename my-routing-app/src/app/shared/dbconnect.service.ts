import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable()
export class DBConnect{
    addRecipeToDB(recipe:any){
        //console.log("recipe added to the db")
        this.http.post('https://taylor-tcs.firebaseio.com/recipe.json',recipe).subscribe(mydata=>{
            console.log(mydata)
        })
    }
    
    loadRecipesFromDB(){
        return this.http
          .get(
            'https://taylor-tcs.firebaseio.com/recipe.json'
          )
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          );
    }
    
    constructor(private http:HttpClient) {}
}