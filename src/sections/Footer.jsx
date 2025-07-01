const Footer = () => {
    return (
        <section className = "c-space pt-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mb-8">
            <div className = "text-white-500 flex gap-2">
                <p>
                  Built with React, Tailwind CSS, and Three.js
                </p>
            </div>

            <div className = "flex gap-3">
                <a href="https://github.com/colin-mclaughlin" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
                </a>


                <a href="https://www.linkedin.com/in/colinwmclaughlin/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/linkedin.png" alt="LinkedIn" className="w-1/2 h-1/2" />
                </a>

                {/*
                <div className = "social-icon">
                    <img src = "/assets/instagram.svg" alt = "instagram" className = "w-1/2 h-1/2"/>
                </div>
                */}
            </div>

            <p className = "text-white-500">
                © 2025 Colin McLaughlin · Toronto, Canada
            </p>
        </section>
    )
}

export default Footer