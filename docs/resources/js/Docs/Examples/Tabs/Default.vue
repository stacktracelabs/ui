<template>
  <Tabs default-value="account" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Update your public account details.</CardDescription>
        </CardHeader>
        <CardContent><Input value="Ada Lovelace" /></CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Choose a secure password for this account.</CardDescription>
        </CardHeader>
        <CardContent><Input type="password" value="password" /></CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/Base/Card'
import { Input } from '@/Components/Base/Input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/Base/Tabs'
</script>
