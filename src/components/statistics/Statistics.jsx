import '../statistics/Statistics.css'

export const Statistics = ({title, stats})=>{

    return <section className='statistics'>
    <h2 className='title'>{title}</h2>

    <ul className='statList'>{
        stats.map((stat)=>{
            return <li id={stat.id} className='item' key={stat.id}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage"> {stat.percentage}%</span>
                </li>
        })
      }</ul>
  </section>
}