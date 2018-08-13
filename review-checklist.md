1. tsliint typedef suppression is only allowed on *Api and *Dal functions, meant to remove context parameter from all the methods
2. Naming convention
   a. file names should be either camel case or dashed
   b. entity interfaces should have .type suffix
   c. union types and enums should either have .type or .const suffix
   
3. Project structure - "layers over features"
/:layer/:feature

for example
api/test.api.ts

4. There are following layers in backend application, files containing those should be named accordingly

  a. routes - purpose of this layer is to create express routes, match them onto api and convert untyped request parameters to typed parameters that api needs. With few exceptions consist of one file, so
  example: /test.routes.ts  

  b. api - business logic layer, containing calls to DAL, conversions into interfaces consumable by UI. Types and interfaces.
  as a rule, should have layer name subfolder.
  example:
   /api/test.api.ts
   /type/test.type.ts

  methods should be named following way, starts with REST method, mostly get or post.    
   example: postTestModel(model: TestModel): Promise<void> 
  in routes such method should be mapper to following path
  router.post(/test, ...)
  
  c. dal - layer for interactions with db

