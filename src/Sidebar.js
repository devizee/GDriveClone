import React, { useState } from 'react'
import "./css/sidebar.css"

import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import DevicesIcon from '@material-ui/icons/Devices';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { Modal } from '@material-ui/core';
import { storage } from './firebase';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState(null);

    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }

    const handleChange=(e)=>{
        // if (e.target.files[0])
        // {
        //     setFile(e.target.files[0])
        // }
        console.log(e.target.files[0]);
    }
    const handleUpload=(event)=>{
        // event.preventDefault();
        // setUploading(true);

        // storage.ref('files/${file.name}').put(file).then(snapshot=>{
        //     console.log(snapshot);
        // })
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal_pop">
                    <form>
                        <div className="modalHeading">
                            <h3>Choisissez le fichier a uploader</h3>
                        </div>

                        <div className="modalBody">
                            {
                                uploading ? (<p className="uploading">Uploading </p>) : (
                                    <>
                                    <input type="file" onChange={handleChange} className='post_file'/>
                                    <input type="submit" className="post_submit" onClick={handleUpload} />
                                    </>
                                )
                            }

                        </div>

                    </form>
                </div>
            </Modal>
            
            <div className="sidebar">
                <div className="sidebar_btn">
                    <button onClick={handleOpen}>
                        <img src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/32/add-icon.png" alt=''></img>
                        <span>Nouveau</span>
                    </button>
                </div>
                
                <div className="sidebar_options">
                    <div className="sidebar_option sidebar_option-Active">
                        <MobileScreenShareIcon/>
                        <span><b>My Drive</b></span>
                    </div>

                    <div className="sidebar_option">
                        <DevicesIcon/>
                        <span>Computers</span>
                    </div>

                    <div className="sidebar_option">
                        <PeopleAltOutlinedIcon/>
                        <span>Shared with me</span>
                    </div>

                    <div className="sidebar_option">
                        <QueryBuilderOutlinedIcon/>
                        <span>Récents</span>
                    </div>

                    <div className="sidebar_option">
                        <StarBorderOutlinedIcon/>
                        <span>Starred</span>
                    </div>

                    <div className="sidebar_option">
                        <DeleteOutlineOutlinedIcon/>
                        <span>Corbeille</span>
                    </div>

                </div>

                <hr/>
                <div className="sidebar_options">
                    <div className="sidebar_option">
                        <CloudQueueIcon/>
                        <span>Stockage</span>
                    </div>

                    <div className="progress_bar">
                        <progress size="tiny" value="50" max="100"/>
                        <span>3 BG utilisé sur 6 GB</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Sidebar