import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useState } from 'react';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("colinwmclaughlin@outlook.com")
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
            }, 2000)

    }

    return (
        <section id="about" className = "c-space my-20" >
            <div className = "grid xl:grid-cols-3 xl:auto-rows-min md:grid-cols-2 grid-cols-1 gap-5 h-full"> 

                {/* Grid divs start here*/}
                {/* First */}
                <div className="col-span-1 xl:row-span-4">
                    <div className ="grid-container h-full">
                        <img src="/assets/Colin_McLaughlin-modified.png" className = "w-full sm:h-[276px] h-fit object-contain"/>
                    
                        <div>
                            <p className = "grid-headtext">
                                Hi, I'm Colin
                            </p>
                            <p className = "grid-subtext">
                                I’m a Computing student at Queen’s University specializing in Artificial Intelligence. My experience spans machine learning, full-stack development, and AI integration through academic, personal, and professional projects.
                            </p>

                            <Button 
                            name="Download My Resume"
                            isBeam 
                            containerClass="w-full mt-10"
                            link="/assets/resume_ColinMcLaughlin.pdf" />

                        </div>

                        <img src="/assets/queens.png" alt = "grid-1-2" className = "w-full sm:h-[266px] h-fit object-contain"/>

                    </div>
                </div>

                {/*
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className = "grid-container">
                        <img src="/assets/grid3.png" alt = "grid-3" className = "w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className = "grid-headtext">
                                Technical Overview
                            </p>    

                            <p className = "grid-subtext">
                                I specialize in machine learning, full-stack web development, and AI integration. I work as an AI software developer at CodingCat Club, where I’m building internal web tools, designing AI-powered educational features, and supporting backend systems and team workflows. Outside of the workplace, I work as a project lead for QMIND, Queen's University's AI Organization, where I'm exploring the intersection of Reinforcement Learning and Large Language Models. I've also contributed to geospatial pathfinding tools for Queen's Hyperloop Design Team and compete in "Capture the Flag" challenges for Queen's Cryptography & Cybersecurity Club.
                            </p>
                            
                        </div>

                    </div>
                </div>
                */}

                {/* Second */}
                <div className = "col-span-2 xl:row-span-1">
                    <div className = "grid-container flex flex-col sm:flex-row items-center sm:items-start gap-8 h-full">
                        <img src="/assets/TechStack1.png" className="sm:max-w-[230px] max-h-[230px] object-contain sm:self-center" />

                        <div>
                            <p className="grid-headtext mb-4 text-center">Tech Stack & Developer Tools</p>

                            <div className="flex flex-col sm:flex-row justify-between gap-8">
                                {/* Programming Languages */}
                                <div>
                                <p className="font-semibold text-white mb-2">Languages</p>
                                <ul className="grid-subtext list-disc list-inside space-y-1">
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C</li>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                    <li>SQL</li>
                                    <li>MATLAB</li>
                                    <li>Latex</li>
                                    
                                </ul>
                                </div>

                                {/* Frameworks & Libraries */}
                                <div>
                                <p className="font-semibold text-white mb-2">Frameworks & Libraries</p>
                                <ul className="grid-subtext list-disc list-inside space-y-1">
                                    <li>React.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Matplotlib</li>
                                    <li>Numpy</li>
                                    <li>Pandas</li>
                                    <li>Tensorflow</li>
                                    <li>SciKit Learn</li>
                                    <li>Flask</li>
                                </ul>
                                </div>

                                {/* Developer Tools */}
                                <div>
                                <p className="font-semibold text-white mb-2">Developer Tools</p>
                                <ul className="grid-subtext list-disc list-inside space-y-1">
                                    <li>Linux</li>
                                    <li>Git</li>
                                    <li>Vercel</li>
                                    <li>Firebase</li>
                                    <li>Bash</li>
                                    <li>WSL</li>
                                    <li>Node.js</li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Third */}
                <div className="col-span-1 xl:row-span-3">
                    <div className = "grid-container h-full">
                        <div className="rounded-3xl w-full h-fit flex justify-center items-center py-1">
                            <Globe 
                            height = {300}
                            width = {300}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"    
                            />
                        </div>

                        <div>
                            <p className = "grid-headtext">
                                Collaborative & Location-Flexible
                            </p>

                            <p className = "grid-subtext">
                                Based in Toronto with flexible availability. Experienced with Git-based workflows and remote collaboration. Comfortable working asynchronously across timezones and adaptable to distributed team environments.
                            </p>

                        </div>
                    </div>
                </div>


                <div className = "xl:col-span-1 xl:row-span-3">
                    <div className = "grid-container h-full">

                        <img src = "assets/Email1.png" alt = "grid-4" className = "w-full h-auto object-contain max-h-[250px] mx-auto"/>

                        <div className = "space-y-3">
                            <p className = "grid-subtext text-center">
                                Contact Me!
                            </p>

                            <div className = "copy-container" onClick={handleCopy}>
                                <img src = {hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt = "copy" />
                                <p className = "lg:text-xl md:text-xl font-medium text-gray_gradient text-white"> 
                                    colinwmclaughlin@outlook.com
                                </p>
                            </div>

                            <p className="grid-subtext text-center text-sm text-white/60">
                                Click my email address to copy, or use the button to reach my contact form below.
                            </p>

                            <div>
                                <Button name = "Contact Form" isBeam containerClass="w-full mt-12"/>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About