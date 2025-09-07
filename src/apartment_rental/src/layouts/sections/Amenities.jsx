
const Amenities = () => {
  return (
    <section>
     <h4>
        <strong>Amenities</strong>
      </h4>
      <div className="w3-row w3-large">
        <div className="w3-col s6">
          <p>
            <i className="fa fa-fw fa-shower" /> Shower
          </p>
          <p>
            <i className="fa fa-fw fa-wifi" /> WiFi
          </p>
          <p>
            <i className="fa fa-fw fa-tv" /> TV
          </p>
        </div>
        <div className="w3-col s6">
          <p>
            <i className="fa fa-fw fa-cutlery" /> Kitchen
          </p>
          <p>
            <i className="fa fa-fw fa-thermometer" /> Heating
          </p>
          <p>
            <i className="fa fa-fw fa-wheelchair" /> Accessible
          </p>
        </div>
      </div>
    </section>
  )
}

export default Amenities