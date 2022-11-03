import './card.css'

const ProjectCard = ({ linkto, imgSrc, imgAlt, name, text }) => {
    return (
        // <div className="col p-1">
            <div className='p-1'>
            <div className="card shadow-sm">
                <a href={linkto}>
                    <img className="bd-placeholder-img card-img-top" id="node_editor_img" width="100%" height="225"
                        src={imgSrc}
                        alt={imgAlt} />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">{name}</h5>
                        <div className="card-text">
                            <small>
                                {text.map((words,index) => <div key={index}>{words}</div>)}
                            </small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard