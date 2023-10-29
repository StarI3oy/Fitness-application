
import GraphTest from "@/components/graphTest";

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

export default function MainWhenAuthorizedPage() {
    return (
        // <main className="flex min-h-screen flex-col items-center p-1">
        //     {
        //         <div>
        //             <div className={"lavshyak-super-header text-center"}>
        //                 Денчик представляет:
        //             </div>
        //             <div className={"lavshyak-super-fitness text-center"}>
        //                 Fitness Application
        //             </div>
        //             <div className={"lavshyak-super-describe text-center"}>
        //                 Page View When User Authorized
        //             </div>
        //             <br/>
        //         </div>

        //     }
        //     {
        //         <div className="lavshyak-box">
        //             <div className="lavshyak-box_header bg-gradient-to-b from-[#0c1125]">
        //                 Главная страница
        //             </div>

        //             <div className="lavshyak-box-under-main-first">
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{CalendarWithTrainingSchedule()}</div>
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{WeightDynamics()}</div>
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{HeartRateDynamics()}</div>
        //             </div>

        //             <div className={"lavshyak-box-under-main-second"}>
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
        //                     <div className={"lavshyak-box_header"}>Физические данные</div>
        //                     <div className={"lavshyak-list"}>
        //                         {PhysicsDataList()}
        //                     </div>
        //                 </div>
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
        //                     <div className="lavshyak-box_header">Диета</div>
        //                     <div className={"lavshyak-list"}>
        //                         {DietList()}
        //                     </div>
        //                 </div>
        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
        //                     <div className="lavshyak-box_header">Рекомендации советника</div>
        //                     <div className={"lavshyak-list"}>
        //                         {RecommendationsFromAdvisorList()}
        //                     </div>
        //                 </div>

        //                 <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
        //                     {FieldOfCorrespondenceWithTheCoach()}
        //                 </div>
        //             </div>

        //         </div>
        //     }
        // </main>


    <GraphTest data={data}/>


        
             
        
    )
}

function PhysicsDataList() {
    return TemplateList();
}

function DietList() {
    return TemplateList();
}

function RecommendationsFromAdvisorList() {
    return TemplateList();
}

export function TemplateList() {
    return (
        <div>
            <div>item1</div>
            <div>item2</div>
        </div>
    );
}

function FieldOfCorrespondenceWithTheCoach() {
    return (<div className={"text-center"}>Поле переписки с тренером</div>)
}

function CalendarWithTrainingSchedule() {
    return (<div>Календарь с графиком тренировок</div>)
}

function WeightDynamics()
{
    return (<div>Динамика веса</div>)
}

function HeartRateDynamics()
{
    return (<div>Динамика пульса</div>)
}