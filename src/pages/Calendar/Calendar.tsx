/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable  */
// // import { useParams } from "react-router-dom";
// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";

// // const Calendar = () => {
// //   const { year, month } = useParams();
// //   const handleDateClick = (arg : any) => {
// //     console.log('hello')
// //     alert('hello');
// //   };

// //   const eventdate : any = {
// //     events: [
// //       { id: 1, title: "event 1", date: "2019-12-01" },
// //       {
// //         title: "event 2",
// //         start: "2023-10-22",
// //         end: "2013-10-22",
// //         allDay: true,
// //         HostName: "William"
// //       },
// //       {
// //         title: "event 3",
// //         start: "2019-12-05",
// //         end: "2019-12-07",
// //         allDay: true
// //       },
// //       {
// //         title: "event 4",
// //         start: "2019-12-05",
// //         end: "2019-12-07",
// //         allDay: true
// //       },
// //       {
// //         title: "event 5",
// //         start: "2019-12-05",
// //         end: "2019-12-07",
// //         allDay: true
// //       },
// //       {
// //         title: "event 6",
// //         start: "2019-12-05",
// //         end: "2019-12-07",
// //         allDay: true
// //       }
// //     ]
// //   };
// //   return (

// //     <div>
// //       {year} {month}
// //       <FullCalendar
// //        events={eventdate.events}
// //       dateClick={(e)=>handleDateClick(e)}
// //       plugins={[dayGridPlugin]}
// //        initialView="dayGridMonth" 
// //        />
// //     </div>
// //   );
// // };

// // export default Calendar;


// // updated code

// import { useParams } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Calendar: React.FC = () => {
//   const { selectedYearParam, selectedMonthParam } = useParams<{ selectedYearParam?: string; selectedMonthParam?: string }>();
//   const yearOptions: string[] = ["2019", "2020", "2021"];
//   const [events, setEvents] = useState<any[]>([]);
//   const monthOptions: string[] = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//   ];
//   const [selectedYear, setSelectedYear] = useState<string>(
//     `${new Date().getFullYear()}`
//   );
//   const [selectedMonth, setSelectedMonth] = useState<string>(
//     `${new Date().getMonth()}`
//   );

//   useEffect(() => {
//     if (!selectedYearParam) return;

//     setSelectedYear(selectedYearParam);
//     if (selectedMonthParam) {
//       setSelectedMonth(selectedMonthParam);
//     }
//   }, [selectedYearParam, selectedMonthParam]);



//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/events');
//         setEvents(response.data);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const handleEventClick = (clickInfo: any) => {
//     const { title, start, end } = clickInfo.event;
//     console.log('Event clicked - Title:', title, clickInfo);
//     console.log('Start:', start);
//     console.log('End:', end);
//   };


  

//   return (
//     <div className="p-5">
//       <div className="mb-2 flex justify-between">
//         <div className="flex">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn m-1 w-48">
//               {selectedYear}
//             </label>
//             <ul
//               tabIndex={0}
//               className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {yearOptions?.map((yearOption) => (
//                 <li
//                   key={yearOption}
//                   onClick={() => {
//                     setSelectedYear(yearOption);
//                   }}
//                 >
//                   <a className={yearOption === selectedYear ? "text-red-600" : ""}>
//                     {yearOption}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="dropdown">
//             <label tabIndex={1} className="btn m-1 w-48">
//               {selectedMonth}
//             </label>
//             <ul
//               tabIndex={1}
//               className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {monthOptions?.map((monthOption) => (
//                 <li
//                   key={monthOption}
//                   onClick={() => {
//                     setSelectedMonth(monthOption);
//                   }}
//                 >
//                   <a className={monthOption === selectedMonth ? "text-red-600" : ""}>
//                     {monthOption}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div>
//           <button className="btn m-1">Create Appointment</button>
//         </div>
//       </div>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         eventClick={handleEventClick} 
//       />
//     </div>
//   );
// };

// export default Calendar;


// another code


import { useParams } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import AppointmentModal from "../../components/Modal/ApoinmentModal";

const Calendar = () => {
  const { year, month } = useParams();
  const [events, setEvents] = useState<any[]>([]);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const yearList = ["2019", "2020", "2021"];
  const monthList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const [selectedYear, setSelectedYear] = useState<string>(
    `${new Date().getUTCFullYear()}`
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    `${new Date().getMonth()}`
  );

  const calendarRef = useRef<any>(null);

  useEffect(() => {
    if (calendarRef.current) {
      let currData = selectedMonth;
      if (+selectedMonth < 10) {
        currData = `0${selectedMonth}`;
      }
      const api = calendarRef.current.getApi();
      api.gotoDate(`${selectedYear}-${currData}-01`); // Provide your target month in the format 'YYYY-MM-DD'
      //   api.gotoDate(`2020-02-01`); // Provide your target month in the format 'YYYY-MM-DD'
    }

    console.log(calendarRef);
  }, [selectedYear, selectedMonth]);

  console.log(calendarRef);

  useEffect(() => {
    if (!year) return;

    setSelectedYear(year);
    if (month) {
      setSelectedMonth(month);
    }
  }, [year, month]);


    useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo: any) => {
    console.log("id--->",clickInfo.event.id);
    const { title, start, end } = clickInfo.event;
    console.log('Event clicked - Title:', title, clickInfo);
    console.log('Start:', start);
    console.log('End:', end);
  };
  return (
    <div className="p-5">
      <div className="mb-2 flex justify-between">
        <div className="flex">
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 w-48">
              {selectedYear}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {yearList?.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedYear(item);
                  }}
                >
                  <a className={item === selectedYear ? "text-red-600" : ""}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown">
            <label tabIndex={1} className="btn m-1 w-48">
              {selectedMonth}
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {monthList?.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedMonth(item);
                  }}
                >
                  <a className={item === selectedMonth ? "text-red-600" : ""}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
        <button
            className="btn m-1"
            onClick={() => {
              setModalStatus(true);
            }}
          >
            Create Appointment
          </button>
        </div>

        
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        // headerToolbar={false}
        initialView="dayGridMonth"
        events={events}
    eventClick={handleEventClick} 
      />
      <AppointmentModal
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
      />
    </div>
  );
};

export default Calendar;

