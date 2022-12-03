import React from 'react'
import "./css/data.css"

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function Data() {
  return (
    <div className="data">
        <div className="data__header">
            <div className="data__headerLeft">
                <p>Mon Drive</p>
                <ArrowDropDownIcon/>
            </div>

            <div className="data__headerRight">
                <ListIcon/>
                <InfoOutlinedIcon/>
            </div>
        </div>

        <div className="data__content">
                <div className="data__grid">
                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>Nom du Fichier</p>
                    </div>

                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>Nom du Fichier</p>
                    </div>

                    <div className="data__file">
                        <InsertDriveFileIcon/>
                        <p>Nom du Fichier</p>
                    </div>

                </div>
                <div className="data__list">
                    <div className="detailsRow">
                        <p><b>Nom <ArrowDownwardIcon/></b></p>
                        <p><b>Owner </b></p>
                        <p><b>Dernière modification </b></p>
                        <p><b>Taille Fichier </b></p>
                    </div>

                    <div className="detailsRow">
                        <p>Nom <InsertDriveFileIcon/></p>
                        <p>Moi</p>
                        <p>Hier</p>
                        <p>1 GB</p>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Data