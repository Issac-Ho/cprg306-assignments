"use client";

import React, { useEffect } from 'react';
import { useUserAuth } from "./_utils/auth-context"; 

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
        <h1 class="text-4xl font-bold mb-5">Shopping List App</h1>
        <div class="text-lg">
      {!user ? (
        <button onClick={gitHubSignIn}>
         Sign in with GitHub
        </button>
      ) : (
        <div>
          <p>
            Signed in as {user.displayName} ({user.email}).
          </p>
          <button onClick={firebaseSignOut} class="text-lg hover:underline">
            Sign out
          </button>
          <br/>
          <a class="text-lg hover:underline" href="/week-9/shopping-list">Continue to your Shopping List</a>
        </div>
      )}
      </div>
    </main>
  );
};

export default LandingPage;
