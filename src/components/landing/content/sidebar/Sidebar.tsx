import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar(){
    return <div>
        <div className='community'>
        <ListItem text='POPULAR COMMUNITIES'/>
        <ListItem text='GAMING'/>
        <ListItem text='SPORTS'/>
        <ListItem text='TV'/>
        <ListItem text='TRAVEL'/>
        <ListItem text='HEALTH & FITNESS'/>    
        <ListItem text='FASHION'/>
        </div>
        
        <div>

        </div>
    </div>;
}


export function ListItem(props: any){
    return <div className='list-item'>
    <span>{props.text}</span>
     <ExpandMoreIcon/>
</div>
}


export default Sidebar;