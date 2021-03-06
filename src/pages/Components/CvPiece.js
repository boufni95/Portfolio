import React from 'react';
import {page0} from '../Styles/CvpieceStyles';
import { Typography,GridList, GridListTile, List, ListItem, ListItemIcon, ListSubheader, IconButton, Tooltip } from '@material-ui/core';
import AddrIco from '@material-ui/icons/Room';
import EmailIco from '@material-ui/icons/Email';
import PhoneIco from '@material-ui/icons/PhoneIphone';
import ResICo from '@material-ui/icons/FilterBAndW';
import DynIco from '@material-ui/icons/BurstMode';
import BackIco from '@material-ui/icons/CloudQueue';
import CodeIco from '@material-ui/icons/Code';
import LaunchIco from '@material-ui/icons/Launch';
export default class CVpiece extends React.Component{
    render(){
        const pieceStyle={
            position:'absolute',
            width:'61.8%',
            height:'61.8%',
            left:'19%',
            top:'19%',
            backgroundColor:'white',
            borderRadius:'7px',
            boxShadow:'5px 5px 30px'
        }
        
        return<div style={pieceStyle}>
               {this.props.val === 0 && <div style={page0}>
                    <Typography variant='h3' align='center'>
                        Boufnichel Hatim
                    </Typography>
                    <Typography variant='h5' align='center'>
                        Developpeur Web
                    </Typography>
                    <div style={{padding:'5%'}}>
                        <GridList>
                            <GridListTile >
                            
                            <Typography variant='h6' align='left' style={{display:'block'}}>
                                Developpeur Web (ReactJS, Javascript,
                                HTML,CSS,Firebase,AWS) Grande habilitè de problem
                                solving, et apprentissage nouvelle technologies,motivè et
                                très passionnè pour la programmation
                            </Typography>
                            </GridListTile>
                            <GridListTile >
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <AddrIco/>
                                    </ListItemIcon>
                                        <Typography variant='body2'>
                                        35 B RUE GEORGES
                                        CLEMENCEAU
                                        42100 ST ETIENNE
                                        </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhoneIco/>
                                    </ListItemIcon>
                                        <Typography variant='body2'  >
                                        0666873421
                                        </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIco/>
                                    </ListItemIcon>
                                        <Typography variant='body2'  >
                                        hatimboufnichel@gmail.com
                                        </Typography>
                                </ListItem>

                            </List>
                                
                            </GridListTile>
                            
                        </GridList>
                        
                        
                    </div>
                </div>}
               {this.props.val === 1 && <div>
                <Typography variant='h3' align='center'>
                        Developpement Web
                    </Typography>
                    <Typography variant='h5' align='center'>
                        Depuis 11/2018
                    </Typography>
                    <div style={{padding:'5%'}}>
                        <GridList cellHeight='auto'>
                            <GridListTile >
                            
                            <Typography variant='h6' align='left' style={{display:'block'}}>
                                Mon experience de devoleppeur Web est concentré sur front end
                                avec la pile HTML/CSS/JS
                                J'utilize ReactJs comme framework, mais je suis tres versatile 
                                pour l'appréhension de nouveaux langages
                            </Typography>
                            </GridListTile>
                            <GridListTile >
                            <List>
                                
                                <ListItem>
                                    <ListItemIcon>
                                        <Tooltip title='Got to site'>
                                            <IconButton  target="_blank" href="/">
                                                <LaunchIco/>
                                            </IconButton>
                                        </Tooltip>
                                            
                                    </ListItemIcon> 
                                    <ListItemIcon>
                                        <Tooltip title='Got to code'>
                                            <IconButton  target="_blank" href="https://github.com/boufni95/Portfolio">
                                                <CodeIco/>
                                            </IconButton>
                                        </Tooltip>
                                    </ListItemIcon>
                                    <Typography variant='h6' >
                                        PORTFOLIO
                                    </Typography>
                                        
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Tooltip title='Got to site'>
                                            <IconButton  target="_blank" href="https://allo.boufnichel.fr/">
                                                <LaunchIco/>
                                            </IconButton>
                                        </Tooltip>
                                            
                                    </ListItemIcon> 
                                    <ListItemIcon>
                                        <Tooltip title='Got to code'>
                                            <IconButton  target="_blank" href="https://github.com/boufni95/GeneralPlatform">
                                                <CodeIco/>
                                            </IconButton>
                                        </Tooltip>
                                    </ListItemIcon>
                                    <Typography variant='h6' >
                                        GENERAL PLATFORM
                                    </Typography>
                                        
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Tooltip title='Got to site'>
                                            <IconButton  target="_blank" href="https://cssdraw.boufnichel.fr/">
                                                <LaunchIco/>
                                            </IconButton>
                                        </Tooltip>
                                            
                                    </ListItemIcon> 
                                    <ListItemIcon>
                                        <Tooltip title='Got to code'>
                                            <IconButton  target="_blank" href="https://github.com/boufni95/cssDraw">
                                                <CodeIco/>
                                            </IconButton>
                                        </Tooltip>
                                    </ListItemIcon>
                                    <Typography variant='h6' >
                                        CSSDRAW
                                    </Typography>
                                        
                                </ListItem>

                            </List>
                                
                            </GridListTile>
                            
                        </GridList>
                        
                        
                    </div>
                </div>}
               {this.props.val === 2 && <div>
                    <Typography variant='h3' align='center'>
                        Developpeur Jeux Video
                    </Typography>
                    <Typography variant='h5' align='center'>
                        Depuis 01/2016
                    </Typography>
                    <div style={{padding:'5%'}}>
                        <Typography variant='h6' align='center'>
                            Mon hobby est de développer des jeux vidéo. Depuis que j'ai commencé, j'ai créé
                            divers jeux mobiles, dont deux que j'ai également publiés sur le store. Au début j'ai
                            utilisé java avec LibGdx pour créer des jeux 2D simple,puis j'ai commencé à utiliser
                            unity3D en C# et j'ai commencé à faire des jeux 3D plus complexes Maintenant je
                            travaille à distance avec un partenaire avec qui je partage mon hobby
                        </Typography>
                    </div>
                </div>}
               {this.props.val === 3 && <div>
                    <Typography variant='h3' align='center'>
                        Helpdesk 
                    </Typography>
                    <Typography variant='h4' align='center'>
                        S.A.C.B.O. Bergamo international airport
                    </Typography>
                    <Typography variant='h5' align='center'>
                        06/2016-07/2018
                    </Typography>
                    <div style={{padding:'5%'}}>
                        <Typography variant='h6' align='center'>
                        Service d'assistance informatique aux employés -
                        computer,périphériques,imprimantes,réseau Maintenance des systèmes
                        informatiques -réseau local,Internet,Internet Of Things
                        </Typography>
                    </div>
               </div>}
               {this.props.val === 4 && <div>
                    <Typography variant='h3' align='center'>
                        Formation 
                    </Typography>
                    <Typography variant='h4' align='center'>
                        FLE CILEC St.Etienne
                    </Typography>
                    <Typography variant='h5' align='center'>
                        10/2018-12/2018
                    </Typography>
                    <Typography variant='body2' align='center'>
                        2 moins pour aprendre le français
                    </Typography>
                    <Typography variant='h4' align='center'>
                        Università degli studi di Bergamo
                    </Typography>
                    <Typography variant='h5' align='center'>
                        Ingeniéur d'Informatique
                    </Typography>
                    <Typography variant='h5' align='center'>
                        9/2014-2017
                    </Typography>
                    <Typography variant='body2' align='center'>
                        Diplme non obtenu
                    </Typography>
                    <Typography variant='h4' align='center'>
                         ISS Ettore Majorana Seriate
                    </Typography>
                    <Typography variant='h5' align='center'>
                        BAC ou equivalente Informatique
                    </Typography>
                    <Typography variant='h5' align='center'>
                        9/2009-7/2014
                    </Typography>
               </div>}
               {this.props.val === 5 && <div>
                <Typography variant='h3' align='center'>
                    Compétences 
                </Typography>
                <GridList cols={4} cellHeight='auto'>
                    <GridListTile>
                        <List>
                            <ListSubheader>
                                Langages 
                            </ListSubheader>
                            <ListItem>
                                Javascript
                            </ListItem>
                            <ListItem>
                                C#
                            </ListItem>
                            <ListItem>
                                Java
                            </ListItem>
                            <ListItem>
                                HTML
                            </ListItem>
                            <ListItem>
                                CSS
                            </ListItem>
                        </List>
                    </GridListTile>
                    <GridListTile>
                        <List>
                            <ListSubheader>
                                Programs & Frameworks
                            </ListSubheader>
                            <ListItem>
                                Unity3D
                            </ListItem>
                            <ListItem>
                                Blender
                            </ListItem>
                            <ListItem>
                                Gimp
                            </ListItem>
                            <ListItem>
                                ReactJs
                            </ListItem>
                            <ListItem>
                                NodeJs
                            </ListItem>
                        </List>
                    </GridListTile>
                    <GridListTile>
                        <List>
                            <ListSubheader>
                                Langues 
                            </ListSubheader>
                            <ListItem>
                                Italien++++
                            </ListItem>
                            <ListItem>
                                Anglais+++
                            </ListItem>
                            <ListItem>
                                français++
                            </ListItem>
                            <ListItem>
                                Arabe++
                            </ListItem>
                        </List>
                    </GridListTile>
                    <GridListTile>
                        <List>
                            <ListSubheader>
                                Extra 
                            </ListSubheader>
                            <ListItem>
                            Autonomie
                            </ListItem>
                            <ListItem>
                            Capacité d'adaptation
                            </ListItem>
                            <ListItem>
                            Curiosité
                            </ListItem>
                            <ListItem>
                            Sens de la communication
                            </ListItem>
                        </List>
                    </GridListTile>
                </GridList>
               </div>}
            </div>
     
    }
}