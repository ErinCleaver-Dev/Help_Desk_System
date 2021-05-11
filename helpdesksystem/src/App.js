import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        Test
      </header>
    </div>
  );
}

export default App;

/* 
Access:  
*  Setup User authenication
    *  Can use django or firebase for end users
*  Admin login is setup up using Django
    *  Add the ability to add new admins 
    *  Add the ability to add roles to IT personal 
    *  Add the ability to update roles
    *  Ability to disable profiles, but not remove since their linked to tickets.
User Management: 
  * Addeding new users:
    * User basic contact information added when a new profile is created for the first time
    * Or when they call the help desk by IT
  * Delete Users:
    * Users cannot be removed.
  *  Editing user:
    *  IT can update information on user profiles.
    *  End users have access to update their own information.

Ticketing System:
  *  Add the ability to create new tickets.
    *  IT can create new tickets 
    *  End users can put in Requests
  * View tickets:
    *  End users can only see their own tickets and it is a one to many relation ship.
    *  IT can look up all tickets that are in the data base.
  * Edit tickets
    *  IT can edit requests  
    *  IT can can esuclate request to other groups.
    *  IT can update request but not reassin tickets that are not currently in their name.
    *  End users can update their tickets with notes in the system
  *  Search: 
     *  IT can search the system for different tickets with sql by email, notes, or ticket number
  * Delete tickets:
    *  Old tickets can not be deleted from the system. 
Inventory Management system:  
  * IT can Add new devices to the inventory system
  * IT can remove old devices from the system
  * IT can link devices to user profile.
  * End users can look up their own devices  
Knowledge Articles:  
  * End users have the ability to search for Knowledge articles 
  * IT can create new articles in the system.
  * IT can close and hide old articles from the system.  
  * IT can delete old articles, but the number must still show up on old tickets.
  * IT can edit existing articles. 
  * The system automically generates a printable copy of the article.
  * The Database uses sql.  
*/


