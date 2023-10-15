import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-1">
            {<div
                className="">
                {
                    <Image
                        className="relative"// dark:drop-shadow-[0_0_0.8rem_#100055ff]"
                        src="/SuperIcon.jpg"
                        alt="xd jpg"
                        width={500}
                        height={500}
                    />}
            </div>
            }
            {

                <div className="lavshyak-box border-2">
                    <div className="lavshyak-box_header">
                        Главная страница
                    </div>


                    <div className="grid-container-under-main bg-gradient-to-b from-[#0c1125]">
                        <div className="lavshyak-box_item grid-item">Календарь с графиком тренировок</div>
                        <div className="lavshyak-box_item grid-item">Динамика веса</div>
                        <div className="lavshyak-box_item grid-item">Динамика пульса</div>
                    </div>

                    <div className={"grid-container-under-under-main bg-gradient-to-b from-[#0c1125]"}>
                        <div className="lavshyak-box_item grid-item">
                            {
                                // TODO: надо сделать както чтоб Физические данные: были как Главная страница
                            }
                            <div className={"lavshyak-box_header"}>Физические данные:</div>
                            <div className={"lavshyak-box_item"}>items</div>
                        </div>
                        <div className="lavshyak-box_item grid-item">Динамика веса</div>
                        <div className="lavshyak-box_item grid-item">Динамика пульса</div>
                        <div className="lavshyak-box_item grid-item">Поле переписки с тренером</div>
                    </div>

                </div>
            }
        </main>
    )
}
