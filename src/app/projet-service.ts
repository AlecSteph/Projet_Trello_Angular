import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

  export class ListeService {
  
  
  
    task = ''
        tasks = [
          { id: 0, name: 'test 1', done: false },
          { id: 1, name: 'test 2', done: true },
          { id: 2, name: 'test 3', done: false }
      ];
    ajouter () {
    this.tasks.push ({
      id : this.tasks.length,
      name : this.task ,
      done: false
    });
    this.task = '';
  }
  detruire () {
    this.tasks = [];
  }
  supprimer (id : number) {
    this.tasks = this.tasks.filter (task => task.id !== id);
  }
  modifier (task: any){
    
    task.edit = !task.edit;
  
  }
  
    }
  
  
  
  

