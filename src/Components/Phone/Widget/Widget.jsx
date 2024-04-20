import './Widget.css'

const Widget = () => {
    return(
        <div className='Widget'>
            <div className='WidgetHeader'>
                <span className='City'>Kyiv</span>
                <span className='Time'>12:00</span>
            </div>
            <span className='Degree'>15dg</span>
        </div>
    )
}

export default Widget;