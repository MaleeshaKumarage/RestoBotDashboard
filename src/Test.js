import React, { Component, Fragment } from "react";

import ReactTable from 'react-table-v6';
import "react-table-v6/react-table.css";


class Test extends Component {
    constructor(props){
        super(props);
        this.state = {  
            isLoaded: false,
            token: "",
            data :[],
            intents:[]
        };
        
    }
    // async componentDidUpdate(){
    //   var k=await  fetch("http://restobot.nutrocare.org/api/projects/default/data", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization:"Bearer "+this.state.token+""
    //     }
    //   });
    //   var val=await k.json();
    //   //this.setState({data:val});
    //   console.log(val); 

     
    // }
     
    async componentDidMount() {
      
      
        //fetch("http://restobot.nutrocare.org/api/projects/default/data", {
        var k=await  fetch("http://restobot.nutrocare.org/api/projects/default/data", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6Im1lIiwiZXhwIjoxNTk3MzQyNTQ1LCJ1c2VyIjp7InVzZXJuYW1lIjoibWUiLCJyb2xlcyI6WyJhZG1pbiJdLCJkYXRhIjp7InZpZXdlZF9oaW50cyI6WyJvbmJvYXJkaW5nX3dlbGNvbWUiLCJvbmJvYXJkaW5nX3BvcHVsYXRlX21vZGVsIiwib25ib2FyZGluZ19hbm5vdGF0ZV9kYXRhIiwib25ib2FyZGluZ19zaGFyZV9ib3QiLCJvbmJvYXJkaW5nX3B1c2hfY2hhbmdlcyJdfSwiYXBpX3Rva2VuIjoiZjkzMTFlYmZlNjk1NjBhM2ZjNjVjM2NlODUxZjIwMjE5OWUyNTYyMiJ9LCJzY29wZXMiOlsiYWN0aW9uUHJlZGljdGlvbjpjcmVhdGUiLCJhY3Rpb25QcmVkaWN0aW9uOmdldCIsImFjdGlvbnM6Y3JlYXRlIiwiYWN0aW9uczpkZWxldGUiLCJhY3Rpb25zOmdldCIsImFjdGlvbnM6dXBkYXRlIiwiYWxsRXZhbHVhdGlvbnM6Y3JlYXRlIiwiYWxsRXZhbHVhdGlvbnM6bGlzdCIsImFuYWx5dGljczpnZXQiLCJicmFuY2g6dXBkYXRlIiwiYnVsa0RhdGE6Z2V0IiwiYnVsa0RhdGE6dXBkYXRlIiwiYnVsa1Jlc3BvbnNlVGVtcGxhdGVzOnVwZGF0ZSIsImJ1bGtTdG9yaWVzOmdldCIsImJ1bGtTdG9yaWVzOnVwZGF0ZSIsImNoYXRUb2tlbjpnZXQiLCJjaGF0VG9rZW46dXBkYXRlIiwiY2xpZW50RXZhbHVhdGlvbjpkZWxldGUiLCJjbGllbnRFdmFsdWF0aW9uOmdldCIsImNsaWVudEV2YWx1YXRpb246dXBkYXRlIiwiY2xpZW50RXZlbnRzOmNyZWF0ZSIsImNsaWVudEV2ZW50czp1cGRhdGUiLCJjbGllbnRNZXNzYWdlczpsaXN0IiwiY2xpZW50czpnZXQiLCJjb21taXQ6Y3JlYXRlIiwiY29uZmlnOmdldCIsImNvbnZlcnNhdGlvbkFjdGlvbnM6bGlzdCIsImNvbnZlcnNhdGlvbkVudGl0aWVzOmxpc3QiLCJjb252ZXJzYXRpb25JbnB1dENoYW5uZWxzOmxpc3QiLCJjb252ZXJzYXRpb25JbnRlbnRzOmxpc3QiLCJjb252ZXJzYXRpb25Qb2xpY2llczpsaXN0IiwiY29udmVyc2F0aW9uUmV2aWV3U3RhdHVzOnVwZGF0ZSIsImNvbnZlcnNhdGlvblNsb3ROYW1lczpsaXN0IiwiY29udmVyc2F0aW9uU2xvdFZhbHVlczpsaXN0IiwiY29udmVyc2F0aW9uVGFnczpjcmVhdGUiLCJjb252ZXJzYXRpb25UYWdzOmRlbGV0ZSIsImNvbnZlcnNhdGlvblRhZ3M6bGlzdCIsImNvbnZlcnNhdGlvblRhZ3M6dXBkYXRlIiwiZG9tYWluOmdldCIsImRvbWFpbjp1cGRhdGUiLCJkb21haW5XYXJuaW5nczpnZXQiLCJlbnRpdGllczpsaXN0IiwiZW50aXR5X3N5bm9ueW1fdmFsdWVzOmNyZWF0ZSIsImVudGl0eV9zeW5vbnltX3ZhbHVlczpkZWxldGUiLCJlbnRpdHlfc3lub255bV92YWx1ZXM6dXBkYXRlIiwiZW50aXR5X3N5bm9ueW1zOmNyZWF0ZSIsImVudGl0eV9zeW5vbnltczpkZWxldGUiLCJlbnRpdHlfc3lub255bXM6Z2V0IiwiZW50aXR5X3N5bm9ueW1zOmxpc3QiLCJlbnRpdHlfc3lub255bXM6dXBkYXRlIiwiZW52aXJvbm1lbnRzOmxpc3QiLCJlbnZpcm9ubWVudHM6dXBkYXRlIiwiZXhhbXBsZXM6Y3JlYXRlIiwiZXhhbXBsZXM6ZGVsZXRlIiwiZXhhbXBsZXM6Z2V0IiwiZXhhbXBsZXM6bGlzdCIsImV4YW1wbGVzOnVwZGF0ZSIsImZlYXR1cmVzOnVwZGF0ZSIsImludGVudHM6Y3JlYXRlIiwiaW50ZW50czpkZWxldGUiLCJpbnRlbnRzOmxpc3QiLCJpbnRlbnRzOnVwZGF0ZSIsImxvZ3M6Y3JlYXRlIiwibG9nczpkZWxldGUiLCJsb2dzOmdldCIsImxvZ3M6bGlzdCIsImxvZ3M6bGlzdCIsImxvb2t1cF90YWJsZXM6Y3JlYXRlIiwibG9va3VwX3RhYmxlczpkZWxldGUiLCJsb29rdXBfdGFibGVzOmdldCIsImxvb2t1cF90YWJsZXM6bGlzdCIsIm1lc3NhZ2VGbGFnczpkZWxldGUiLCJtZXNzYWdlRmxhZ3M6dXBkYXRlIiwibWVzc2FnZUludGVudHM6ZGVsZXRlIiwibWVzc2FnZUludGVudHM6dXBkYXRlIiwibWVzc2FnZXM6Y3JlYXRlIiwibWV0YWRhdGE6Y3JlYXRlIiwibWV0YWRhdGE6ZGVsZXRlIiwibWV0YWRhdGE6Z2V0IiwibWV0YWRhdGE6bGlzdCIsIm1vZGVsczpjcmVhdGUiLCJtb2RlbHM6ZGVsZXRlIiwibW9kZWxzLmV2YWx1YXRpb25zOmRlbGV0ZSIsIm1vZGVscy5ldmFsdWF0aW9uczpnZXQiLCJtb2RlbHMuZXZhbHVhdGlvbnM6bGlzdCIsIm1vZGVscy5ldmFsdWF0aW9uczp1cGRhdGUiLCJtb2RlbHM6Z2V0IiwibW9kZWxzLmpvYnM6Y3JlYXRlIiwibW9kZWxzOmxpc3QiLCJtb2RlbHMubW9kZWxCeVRhZzpnZXQiLCJtb2RlbHMuc2V0dGluZ3M6Z2V0IiwibW9kZWxzLnNldHRpbmdzOnVwZGF0ZSIsIm1vZGVscy50YWdzOmRlbGV0ZSIsIm1vZGVscy50YWdzOnVwZGF0ZSIsIm5sZ1Jlc3BvbnNlOmNyZWF0ZSIsInByb2plY3RzOmNyZWF0ZSIsInB1YmxpY19zc2hfa2V5OmdldCIsInJlZ2V4ZXM6Y3JlYXRlIiwicmVnZXhlczpkZWxldGUiLCJyZWdleGVzOmdldCIsInJlZ2V4ZXM6bGlzdCIsInJlZ2V4ZXM6dXBkYXRlIiwicmVwb3NpdG9yaWVzOmNyZWF0ZSIsInJlcG9zaXRvcmllczpkZWxldGUiLCJyZXBvc2l0b3JpZXM6Z2V0IiwicmVwb3NpdG9yaWVzOmxpc3QiLCJyZXBvc2l0b3JpZXM6dXBkYXRlIiwicmVwb3NpdG9yeV9zdGF0dXM6Z2V0IiwicmVzcG9uc2VUZW1wbGF0ZXM6Y3JlYXRlIiwicmVzcG9uc2VUZW1wbGF0ZXM6ZGVsZXRlIiwicmVzcG9uc2VUZW1wbGF0ZXM6bGlzdCIsInJlc3BvbnNlVGVtcGxhdGVzOnVwZGF0ZSIsInJvbGVzOmNyZWF0ZSIsInJvbGVzOmRlbGV0ZSIsInJvbGVzOmdldCIsInJvbGVzOmxpc3QiLCJyb2xlczp1cGRhdGUiLCJyb2xlcy51c2VyczpsaXN0Iiwicm9sZXMudXNlcnM6dXBkYXRlIiwic3RhdGlzdGljczpnZXQiLCJzdG9yaWVzOmNyZWF0ZSIsInN0b3JpZXM6ZGVsZXRlIiwic3RvcmllczpnZXQiLCJzdG9yaWVzOmxpc3QiLCJzdG9yaWVzOnVwZGF0ZSIsInRlbGVtZXRyeTpjcmVhdGUiLCJ0ZWxlbWV0cnk6ZGVsZXRlIiwidGVsZW1ldHJ5OmdldCIsInRlc3RzOmNyZWF0ZSIsInVzZXI6Z2V0IiwidXNlci5wYXNzd29yZDp1cGRhdGUiLCJ1c2VyOnVwZGF0ZSIsInVzZXIudmFsdWVzOnVwZGF0ZSIsInVzZXJHb2FsczpjcmVhdGUiLCJ1c2VyR29hbHM6ZGVsZXRlIiwidXNlcnM6Y3JlYXRlIiwidXNlcnM6ZGVsZXRlIiwidXNlcnM6bGlzdCIsInVzZXJzLnJvbGVzOmRlbGV0ZSIsInVzZXJzLnJvbGVzOmxpc3QiLCJ1c2Vycy5yb2xlczp1cGRhdGUiLCJ3YXJuaW5nczpnZXQiXX0.hVOddbsoceaEqHTxmbo5bsUIDR2Gdl9KnoQ8TuYgYqVkaIR8uvetxnbmvR9-e_dis0cltvv9K7sN8re43Az6U8_BBk8s7y2vKhlg91NgjSh6GT3NBZdRLXfEbDPAYNwVWi8QQnXFPtToEqBNI0orfA3ohMboT2Zf5tEB9bHEFXJI0qP40EO8FMegSprP3kZ6FBtty1Wzw7tVvC8esYECktGt8Li2CIKkBmK8t4eb7oXmXznggxEkOUJ7-w4KD81vMSFs1dTAXTF0Lv6e1AuzNmAWYcbFG5Kd4aRCTFstABHPqAvLF2dPYbselsYQAJdrAihwR9M-u2e4eopfR8PEKA"
          },
        //   body: JSON.stringify({
        //     "id": "903",
        //     "text": "meeeeeeey",
        //     "intent": "greet",
           
        //     "hash": "string",
        //     "intent_mapped_to": "string"
        //   })
        });
        var val=await k.json();
        if(k.status=='401'){
          var auth=await  fetch("http://restobot.nutrocare.org/api/auth", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
             },body: JSON.stringify({username: "me", password: "mal33sha"})})
             var authVal=await auth.json();
            this.setState({token:authVal['access_token']})
           
            

            var k1=await  fetch("http://restobot.nutrocare.org/api/projects/default/data", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization:"Bearer "+this.state.token+""
              }
            });
            var val1=await k1.json();
            this.setState({data:val1})
           
           
        }else{
          console.log(val[0]); 
        }
              
      }
      renderTableData() {
        console.log("renderTableData");
        return(this.state.data.map(a=>{
         // console.log(a.entities[0]);
          return(
            <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.text}</td>
            <td>{a.intent}</td>
            <td>{a.entities[0]==null?"":a.entities[0].entity}</td>
            <td>{a.entities[0]==null?"":a.entities[0].value}</td>
           
           
         </tr>
          )
  
         }));
                    
        
     }

 
  render() { 
   
    
    return (
      <div>
 
     <ReactTable
          data={this.state.data}
          filterable={true}
          sorted={[{ id: "intent", desc: true }]}
          columns={[
            {
             
              columns: [
                
                {
                  Header: "TEXT",
                 
                  accessor: "text"
                },
               {
                  Header: "Intent",
                  accessor: "intent",
                 
                },             
                     
                {
                  Header: "Entity",
                  id:"entities",
                  accessor: d => d.entities[0]==null?"NA":d.entities[0].entity
                },
                {
                  Header: "Value",
                  id:"value",
                  accessor: d => d.entities[0]==null?"NA":d.entities[0].value
                }
              ]
            }
          ]}
          defaultPageSize={8}
          className="-striped -highlight"
        />
   </div>
    );
  }
}

export default Test;