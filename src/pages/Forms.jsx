import _ from 'lodash'

export function Forms() {
  return (
    <div>
      {[
        'text',
        'email',
        'url',
        'password',
        'number',
        'date',
        'datetime-local',
        'month',
        'search',
        'tel',
        'time',
        'week',
      ].map((each) => (
        <div key={each} className="mb-5">
          <input type={each} placeholder={each} className="form-input" />
        </div>
      ))}
      <div className="mb-5">
        <textarea className="form-textarea" />
      </div>
      <div className="mb-5">
        <select className="form-select">
          <option>Apple</option>
          <option>Banana</option>
          <option>Orange</option>
        </select>
      </div>
      <div className="mb-5">
        <select multiple className="form-multiselect">
          <option>Apple</option>
          <option>Banana</option>
          <option>Orange</option>
        </select>
      </div>
      <div className="mb-5">
        <input type="checkbox" className="form-checkbox" />
      </div>
      <div className="mb-5">
        <input type="radio" className="form-radio" />
      </div>
    </div>
  )
}
