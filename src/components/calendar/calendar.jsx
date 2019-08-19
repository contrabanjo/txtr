import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './main.scss'

const testEvents = [
    { title: 'All Church Barbeque', start: '2019-08-18' },
    { title: 'Blessing of the Backpacks', start: '2019-08-11' },
    { title: 'LUAU', start: '2019-08-23' },
    { title: 'Sunday Morning Worship', start: '2019-08-04', backgroundColor: 'paleGreen' },
    { title: 'Sunday Morning Worship', start: '2019-08-11', backgroundColor: 'paleGreen' },
    { title: 'Sunday Morning Worship', start: '2019-08-18', backgroundColor: 'paleGreen' },
    { title: 'Sunday Morning Worship', start: '2019-08-25', backgroundColor: 'paleGreen' },
    { title: 'Bible Study', start: '2019-08-07', backgroundColor: 'goldenrod' },
    { title: 'Bible Study', start: '2019-08-14', backgroundColor: 'goldenrod' },
    { title: 'Bible Study', start: '2019-08-21', backgroundColor: 'goldenrod' },
    { title: 'Bible Study', start: '2019-08-28', backgroundColor: 'goldenrod' },
    { title: 'Choir Practice', start: '2019-08-08', backgroundColor: 'tomato' },
    { title: 'Choir Practice', start: '2019-08-15', backgroundColor: 'tomato' },
    { title: 'Choir Practice', start: '2019-08-22', backgroundColor: 'tomato' },
    { title: 'Choir Practice', start: '2019-08-29', backgroundColor: 'tomato' },
]

export default function Calendar(){
  return <FullCalendar events={testEvents} defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/>
}