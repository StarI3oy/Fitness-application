export default function MainWhenAuthorizedPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-1">
            {
                <div>
                    <div className={"lavshyak-super-header text-center"}>
                        Денчик представляет:
                    </div>
                    <div className={"lavshyak-super-fitness text-center"}>
                        Fitness Application
                    </div>
                    <div className={"lavshyak-super-describe text-center"}>
                        Page View When User Authorized
                    </div>
                    <br/>
                </div>

            }
            {
                <div className="lavshyak-box">
                    <div className="lavshyak-box_header bg-gradient-to-b from-[#0c1125]">
                        Главная страница
                    </div>

                    <div className="lavshyak-box-under-main-first">
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{CalendarWithTrainingSchedule()}</div>
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{WeightDynamics()}</div>
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">{HeartRateDynamics()}</div>
                    </div>

                    <div className={"lavshyak-box-under-main-second"}>
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
                            <div className={"lavshyak-box_header"}>Физические данные</div>
                            <div className={"lavshyak-list"}>
                                {PhysicsDataList()}
                            </div>
                        </div>
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
                            <div className="lavshyak-box_header">Диета</div>
                            <div className={"lavshyak-list"}>
                                {DietList()}
                            </div>
                        </div>
                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
                            <div className="lavshyak-box_header">Рекомендации советника</div>
                            <div className={"lavshyak-list"}>
                                {RecommendationsFromAdvisorList()}
                            </div>
                        </div>

                        <div className="lavshyak-box_item bg-gradient-to-b from-[#0c1125]">
                            {FieldOfCorrespondenceWithTheCoach()}
                        </div>
                    </div>

                </div>
            }
        </main>
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