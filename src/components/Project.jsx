import React from "react";

function Project(){
    return(
        <section id="projects" class="front-page-section">
		<div class="section-header">
			<div class="container">
				<div class="row">
						<div class="col-sm-12">
							<h3>Projects</h3>
						</div>
						<div class="col-sm-10 col-sm-offset-1">
							<div class="section-description">You'll love our work. Check it out!</div>
						</div>
				</div>
			</div>
		</div>
	<div class="section-content">
		<div class="container-fluid">
			<div class="row inline-columns">
                <div id="illdy_project-3" className="col-sm-3 col-xs-6 no-padding widget_illdy_project">
                    <a href="https://google.com" className="project-3" data-fancybox="gallery" >
                        <span className="project-overlay"></span>
                    </a>
                </div>
                <div id="illdy_project-4" className="col-sm-3 col-xs-6 no-padding widget_illdy_project">
                    <a href="https://google.com" className="project-4" data-fancybox="gallery">
                        <span className="project-overlay"></span>
                    </a>
                </div>
                <div id="illdy_project-5" className="col-sm-3 col-xs-6 no-padding widget_illdy_project">
                    <a href="https://google.com" className="project-5" data-fancybox="gallery">
                        <span className="project-overlay"></span>
                    </a>
                </div>
                <div id="illdy_project-6" className="col-sm-3 col-xs-6 no-padding widget_illdy_project">
                    <a href="https://google.com" className="project-6" data-fancybox="gallery">
                        <span className="project-overlay"></span>
                    </a>
                </div>
			</div>
		</div>
	</div>
</section>
    )
}

export default Project;