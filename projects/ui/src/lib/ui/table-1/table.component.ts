import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [NgFor],

  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  // هنا تم تعريف مصفوفة احادية باسم items لتخزين البيانات وارسالها الى العرض
  items = [
    { First: 'Abdulrahman',Last: 'Al-Sarakbi', age: 22,Email: 'Abdurahman1@code.com',Work: 'Developer' },
    { First: 'Khaled',Last: 'Al-Sarakbi', age: 30,Email: 'Khaled642@code.com',Work:'--' },
    { First: 'Yahea',Last: 'Al-Sarakbi', age: 24,Email: 'Yahea155@code.com',Work:'Web developer' },
    { First: 'Ahmad',Last: 'Al-Sarakbi', age: 19,Email: 'Ahmad812@code.com',Work:'--' },
  ];
}
