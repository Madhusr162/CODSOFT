const Projects = () => {
    return (
        <>
        <section className="App-header" id="projects">
            <div className="container-fluid mt-5">
                <h1>My projects</h1>
                <div className="row mt-5">
                    <div className="col-6">
                        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="card-body">
                                <h4 class="card-title"><b>Twitter clone</b></h4>
                                <p class="card-text">Twitter clone App which has features to follow, edit profile, upload profile, create tweet, retweet, comment etc.,</p>
                                <a href="https://github.com/Madhusr162/Twitter-clone" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="card-body">
                                <h4 class="card-title"><b>E-commerce</b></h4>
                                <p class="card-text">E-commerce App which allows the user to view product, add to cart, proceed to checkout and some admin features like add product, add user etc.,</p>
                                <a href="https://github.com/Madhusr162/Ecommerce" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="card-body">
                                <h4 class="card-title"><b>Sales App</b></h4>
                                <p class="card-text">Sales App which has features to add sales, view top 5 sales, login, register and view today's revenue etc.,</p>
                                <a href="https://github.com/Madhusr162/SalesApp" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" >
                            <div class="card-body">
                                <h4 class="card-title"><b>To-do list</b></h4>
                                <p class="card-text">To-do list App which allows the user to add task, update, view and delete task</p>
                                <a href="https://github.com/Madhusr162/To-doList" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" >
                            <div class="card-body">
                                <h4 class="card-title"><b>Weather App</b></h4>
                                <p class="card-text">Weather App which shows the weather of the city given with the help of public weather upi</p>
                                <a href="https://github.com/Madhusr162/GetWeather" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                    <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div class="card-body">
                                <h4 class="card-title"><b>Loan credit management</b></h4>
                                <p class="card-text">Loan credit management App which allows the user to view their loan eligibility, view past loans, make payment of loan etc.,</p>
                                <a href="https://github.com/Madhusr162/LoanCreditManagement" target ="/" class="btn btn-primary">More about the project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Projects;