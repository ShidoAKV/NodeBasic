
// authentication using username and password
import passport  from 'passport';
import {Strategy as LocalStratergy} from 'passport-local';
import User from './Models/person.js';


passport.use(new LocalStratergy(
    async function(USERNAME, PASSWORD, done){
      try {
        console.log('Received credentials');
    
        const user = await User.findOne({ username: USERNAME });
        if (!user) {
          console.log('User not found');
          return done(null, false, { message: 'Incorrect username' });
        }
        
        const isPasswordCorrect = await user.comparePassword(PASSWORD);
        
        if (!isPasswordCorrect) {
          console.log('Password mismatch');
          return done(null, false, { message: 'Incorrect password' });
        }
        
        console.log('Authentication successful');
        return done(null, user, { message: 'Welcome to the hotel' });
        
      } catch (error) {
        console.error('Error during authentication:', error);
        return done(error);
      }
    }
  ));
  
  export default passport;