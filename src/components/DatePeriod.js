import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux'
import { filterByDate } from '../AC/filter'

class DatePeriod extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <DayPicker
                    ref="daypicker"
                    selectedDays={ this.handleSelect}
                    onDayClick={ this.handleDayClick }
                />
                {this.getRangeTitle()}
            </div>
        );
    }

    handleSelect = day => DateUtils.isDayInRange(day, this.props)

    getRangeTitle() {
        const { from, to } = this.props
        const fromText = from && `Start date: ${from.toDateString()}`
        const toText = to && `Finish date: ${to.toDateString()}`

        return <p>{fromText} {toText}</p>
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.props);

        const { articles, filterByDate } = this.props
        filterByDate(articles, range)
    }
}

export default connect((state) => {

        const {articles, filters} = state
        return {
            articles: articles,
            from: filters.from,
            to: filters.to,
        }
    }, {
        filterByDate
    }
)(DatePeriod)