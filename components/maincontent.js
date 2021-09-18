import React from 'react'

export default function MainContent() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pr-md-0 col-lg-12 col-xl-8">
                        <div className="lb-ad">


                            <div id='tt_leaderboard_atf_desk'></div>
                            <div id='tt_leaderboard_atf_flex_mob'></div>
                        </div>
                        <div className="navigation">
                            <div className="row">

                                <div className="col-6  text-left"><a id="btnPrev" className="btn  rounded-0" href='#'><i className="fa fa-angle-left mr-1"></i> Previous</a>
                                </div>

                                <div className="col-6 text-right float-right"><a id="btnNext" className="btn rounded-0" href='#'>Next <i
                                            className="fa fa-angle-right ml-1"></i></a></div>
                            </div>
                        </div>


                        <article className="article">
                            <h1>Node.js Local Module</h1>

                            <p>
                                Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can
                                use it. For example, if you need to connect to MongoDB and fetch data then you can create a module for it, which can be reused in your application.
                            </p>
                            <h2>Writing Simple Module</h2>
                            <p>Let's write simple logging module which logs the information, warning or error to the console. </p>
                            <p>In Node.js, module should be placed in a separate JavaScript file. So, create a Log.js file and write the following code in it.</p>

                            <div className="card code-panel ">
                                <div className="card-header example-header">
                                    <div className="example-caption">Log.js</div><button className="copy-btn pull-right" title="Copy example code"><i className="fa fa-copy"></i> Copy</button>
                                </div>


                                <div ss=" panel-body ">
                                    {/* <pre className="csharpcode"><code><span className="kwrd ">var</span> log = {
            info: <span className="kwrd ">function</span> (info) { 
                console.log(<span className="str ">'Info: '</span> + info);
            },
            warning:<span className="kwrd ">function</span> (warning) { 
                console.log(<span className="str ">'Warning: '</span> + warning);
            },
            error:<span className="kwrd ">function</span> (error) { 
                console.log(<span className="str ">'Error: '</span> + error);
            }
    };

module.exports = log
</code></pre> */}
                                    <div className="card-footer example-footer "></div>
                                </div>

                            </div>
                            <p>In the above example of logging module, we have created an object with three functions - info(), warning() and error(). At the end, we have assigned this object to
                                <strong>module.exports</strong>. The module.exports in the above example exposes a log object as a module.
                            </p>
                            <p>
                                The <i>module.exports</i> is a special object which is included in every JS file in the Node.js application by default. Use <strong>module.exports</strong> or
                                <strong>exports</strong> to expose a function, object or variable as a module in Node.js.
                            </p>
                            <p>Now, let's see how to use the above logging module in our application.</p>

                            <h2>Loading Local Module</h2>
                            <p>To use local modules in your application, you need to load it using require() function in the same way as core module. However, you need to specify the path of JavaScript file of the module.</p>
                            <p>The following example demonstrates how to use the above logging module contained in Log.js.
                            </p>
                            <div className="card code-panel ">
                                <div className="card-header example-header ">
                                    <div className="example-caption ">app.js</div><button className="copy-btn pull-right " title="Copy example code "><i className="fa fa-copy "></i> Copy</button>
                                </div>
                                <div className="panel-body ">
                                    <pre className="csharpcode "><code><span className="kwrd ">var</span> myLogModule = require(<span className="str ">'./Log.js'</span>);

myLogModule.info(<span className="str ">'Node.js started'</span>);
</code></pre>
                                    <div className="card-footer example-footer "></div>
                                </div>
                            </div>
                            <p>In the above example, app.js is using log module. First, it loads the logging module using require() function and specified path where logging module is stored. Logging module is contained in Log.js file in the root folder.
                                So, we have specified the path './Log.js' in the require() function. The '.' denotes a root folder. </p>
                            <p>The require() function returns a log object because logging module exposes an object in Log.js using module.exports. So now you can use logging module as an object and call any of its function using dot notation e.g myLogModule.info()
                                or myLogModule.warning() or myLogModule.error()
                            </p>
                            <p>Run the above example using command prompt (in Windows) as shown below.</p>
                            <samp>
                                C:\> node app.js
                                <br />
                                Info: Node.js started
                            </samp>
                            <p>Thus, you can create a local module using module.exports and use it in your application.
                            </p>
                            <p>
                                Let's see how to expose different types as a node module using module.exports in the next section.
                            </p>

                        </article>




                        <div className="border border-secondary mt-3 mb-3 p-3 align-middle bg-light text-center ">
                            <span className="mr-3 text-dark ">Want to check how much you know
                                Node.js? </span>
                            <div className="mt-3 "><a className="btn start-learning text-white " href="# " title="Test your Node.js knowledge ">Start Node.js Test</a></div>
                        </div>
                        <div id="social-platforms " className="mt-4 mb-4 ">
                            <ul className="row align-items-center ">
                                <li className="col-md-3 col-sm-6 pl-lg-0 ">
                                    <a className="btn btn-icon btn-facebook " id="fbshare "><i
                                            className="fa fa-facebook "></i><span>Share</span></a>
                                </li>
                                <li className="col-md-3 col-sm-6 pl-sm-0 "> <a className="btn btn-icon btn-twitter " href="# "><i className="fa fa-twitter "></i><span> Tweet</span></a></li>
                                <li className="col-md-3 col-sm-6 pl-sm-0 ">
                                    <a className="btn btn-icon btn-linkedin " href="# "><i className="fa fa-linkedin "></i><span>Share</span></a>
                                </li>
                                <li className="col-md-3 col-sm-6 pl-md-0 "> <a className="btn btn-icon btn-whatsapp " href="# "><i className="fa fa-whatsapp "></i><span>Whatsapp</span></a></li>
                            </ul>
                        </div>





                        <div className="navigation ">
                            <div className="row ">

                                <div className="col-6 text-left "><a id="btnPrev " className="btn rounded-0 " href='#'><i className="fa fa-angle-left mr-1 "></i> Previous</a>
                                </div>

                                <div className="col-6 text-right float-right "><a id="btnNext " className="btn rounded-0 " href='#'>Next <i
                                            className="fa fa-angle-right ml-1 "></i></a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
