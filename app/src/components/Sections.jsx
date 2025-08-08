import './Sections.css'

function Item({item}) {
  const icon = item.icon ? `data/icons/${item.icon}` : null

  return (
    <div className="item">
      <a href={ item.url ? item.url : "" } target="_blank">
        { icon ? <img src={icon} /> : null }
        <div className="item-text">
          <div><strong>{ item.title ? item.title : null }</strong></div>
          <div>{ item.description ? item.description : null }</div>
        </div>
      </a>
    </div>
  )
}

function Section({section}) {
  const accent = {"--accent": section.color ? section.color : "#fff" }

  return (
    <div className="section" style={ accent }>
      <div className="section-title">
        <h2>{ section.title ? section.title : null }</h2>
      </div>
      <div className="section-description">
        <p><em>{ section.description ? section.description : null }</em></p>
      </div>
      <div className="section-items">
        { section.items ? section.items.map((item, idx) => <Item key={idx} item={item} />) : null }
      </div>
    </div>
  )
}

function Sections({sections}) {
  return (
    <>
      { sections ? sections.map((item, idx) => <Section key={idx} section={item} />) : null }
    </>
  )
}

export default Sections 
