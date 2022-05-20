import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'

const ServicesCard = ({color, title, icon, subtitle}) => (
    <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
        <div className='ml-5 flex flex-col flex-1'>
            <h1 className='text-white mt-2 text-lg'>{title}</h1>
            <p className='text-white mt-2 text-sm md:w-9/12'>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return(
        <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
            <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
                <div className='flex-1 flex flex-col  justify-start items-start'>
                    <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>Сервисы которые мы
                        <br />
                        продолжаем улучшать
                    </h1>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-start items-center'>
                <ServicesCard 
                color='bg-[#2952e3]'
                title='Гарантированная безопасность'
                icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                subtitle='Безопасность гарантирована. Мы работаем над приватностью и добиваемся качества продукта.'
                />
                <ServicesCard 
                color='bg-[#8945f8]'
                title='Лучший способ оплаты'
                icon={<BiSearchAlt fontSize={21} className="text-white" />}
                subtitle='Низкие комиссии, поэтому цена на обучение заметно ниже сравнением с другими вариантами.'
                />
                <ServicesCard 
                color='bg-[#F84550]'
                title='Быстрые транзакции'
                icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                subtitle='Засчет децентрализации блокчейна достигается наивысшая скорость обмена вашими монетами.'
                />
            </div>
        </div>
    )
}

export default Services;