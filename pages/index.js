import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";
import Link from 'next/link';

const Index = () => (
    <Layout>
        { /** Header Card  */}
        <header>
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="Guille.png" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Guillermo Marcano</h1>
                            <h3>FullStack Developer</h3>
                            <p>Un Programador Full Stack es un perfil híbrido entre el desarrollador Front End y Back End.
                                Es un experto con conocimientos en diseño web, lenguajes de programación, base de datos, servidores, API’s y Sistemas de Control de Versiones.
                                Un desarrollador Full-Stack no necesariamente domina todas las tecnologías. Sin embargo, se espera que el profesional trabaje tanto del lado cliente como el del  servidor y entienda lo que sucede al desarrollar una aplicación. Él o ella debe tener un interés genuino en todas las tecnologías de software.
                            </p>
                            <a href="/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        { /**Secund Section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: percentage }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, Description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{`Desde ${from} Hasta:${to ? to : 'Actual'}`}</h5>
                                        <p>{Description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/blog">
                            <a className="btn btn-btn-primary">Conoce Mas</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* { Portfolio section } */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={image} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#">Know More..</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/github">
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;