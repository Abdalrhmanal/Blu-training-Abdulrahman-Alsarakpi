import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-table-2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table-2.component.html',
  styleUrl: './table-2.component.css'
})
export class Table2Component {
  // هنا تم تعريف مصفوفة احادية باسم items لتخزين البيانات وارسالها الى العرض
  items = [
    { First: 'Abdulrahman', Last: 'Al-Sarakbi', age: 22, Email: 'Abdurahman1@code.com', Work: 'developer Back-End' },
    { First: 'Khaled', Last: 'Al-Sarakbi', age: 30, Email: 'Khaled642@code.com', Work: 'developer Front-End' },
    { First: 'Yahea', Last: 'Al-Sarakbi', age: 24, Email: 'Yahea155@code.com', Work: '--' },
    { First: 'Ahmad', Last: 'Al-Sarakbi', age: 19, Email: 'Ahmad812@code.com', Work: '--' },
  ];
}
