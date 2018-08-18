import React from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection } from './Shared';

const Logout = () => (
  <Card>
    <CardSection>
      <Button text={'Logout'} />
    </CardSection>
  </Card>
);

export default Logout;
