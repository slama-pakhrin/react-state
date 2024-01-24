export default function Tabs({children, navs: naves, Wrapper = "menu"}){
    // const Wrapper = wrapper 
    return(
        <>
        <Wrapper> {naves} </Wrapper> 
        <div id="tab-content">
        {children}  
        </div>  
        </>
    );
}