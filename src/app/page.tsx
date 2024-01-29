"use client"
import type { NextPage } from "next";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat'; 
import React, { useState } from 'react';

import CardCalendar from "@/components/cardCalendar";
import Bcarousel from "@/components/baseCarousel";
import NewsCard from "@/components/newsCard";
import taskData from "@/taskdata.json";
import CurrentTime from "@/components/currTime";



const Page: NextPage = () => {
  const [selectedDate, setSelectedDate] = useState("27-01-2024");
  const filteredData = taskData.find(item => item.id === selectedDate);

  const formattedDate = dayjs(selectedDate, 'DD-MM-YYYY').locale('ru').format('D MMMM, dd');
  dayjs.extend(localizedFormat); 
  dayjs.locale('ru'); 

  return (
    <body className = "bg-pink-100">
      <div className = "bg-white absolute inset-5 w-96 h-[860px] rounded">
        <NewsCard />
      </div>
      <div className ="absolute  top-5 right-14 rounded">
        <CardCalendar setSelectedDate={setSelectedDate}/>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 rounded">
        <Bcarousel />
      </div>
      <div className="absolute w-96 h-36 right-5 bottom-20 bg-pink-300 rounded text-xl">
        <div className = "absolute m-5">
          У вас программа: 1
          </div>
      </div>
      <div className = "absolute top-32 left-1/2 -translate-x-1/2 h-[460px] w-[660px]">
      <div className = "absolute left-1/2 -translate-x-1/2 bg-pink-300 rounded h-60 w-96 border-2">

      <div className="absolute left-5 mt-5 rounded text-xl">
      {filteredData ?(filteredData.content.trim() !== '' ? filteredData.content : 'Нет дел на это число') : 'Нет дел на это число'}
      </div>  

      <div className="absolute left-5 mt-12 rounded text-3xl">
      </div>
      <div className="absolute left-5 mt-14 rounded text-3xl">
      {formattedDate} 
      </div>
      <div className="absolute m-5 mt-24 rounded text-6xl">
        <CurrentTime/>
      </div>
      </div>
      <div className="absolute left-8 top-40 bg-pink-300 rounded w-80 min-h-52 border-2 text-l">
        <div className = "m-5 w-64">
        Программа тренировки на сегодня:<br/>{filteredData ?(filteredData.train.trim() !== '' ? filteredData.train.split("\n").map((line, index) => (
    <div key={index}>{line}</div>)) : 'Тренировка не запланирована') : 'Тренировка не запланирована'}
        </div>
      </div>
      <div className="absolute right-8 top-64 bg-pink-300 rounded w-80 min-h-20 border-2 text-xl">
        <div className = "m-5">
        Заметки к тренировке:<br/>{filteredData ? (filteredData.trainnotice.trim() !== '' ? filteredData.trainnotice : 'Заметок нет') : 'Заметок нет'}
        </div>
      </div>
      </div>
    </body>
    
  )
}
export default Page