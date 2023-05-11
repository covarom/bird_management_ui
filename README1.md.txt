npx create-nx-workspace bird_management_ui --preset=empty --cli=nx --nx-cloud=false --interactive=false

nx generate @nrwl/angular:app bird_management_ui


npm exec nx generate @nrwl/angular:lib auth/login --routing --lazy  --directory=bird_management_ui


//create lib into libs/
npm exec nx generate @nrwl/angular:lib {name lib} --routing --lazy  --directory=bird_management_ui

nx g m shared/shared --flat --project=bird_management_ui

//create module into lib/

npm exec nx generate @nrwl/angular:lib home --routing --lazy  --directory=bird_management_ui
//create component into module
npx nx g @nx/angular:component --name=layout --project=login --style=scss --export --flat


npx nx generate @nrwl/angular:service --name=auth --project=auth --flat

