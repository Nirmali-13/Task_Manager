import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task[] {
    
    const searchText = args[0];
    return value.filter(a=>a.title.includes(searchText.toLowerCase())||a.description.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    
  }


}
