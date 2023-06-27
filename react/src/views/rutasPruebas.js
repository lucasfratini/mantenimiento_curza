//Estados
<BrowserRouter>
        <Routes>
            <Route path='/' element={ <ShowEstado />} />
            <Route path='/create' element={ <CreateEstado />} />
            <Route path='/edit/:id' element={ <EditEstado />} />            
        </Routes>
</BrowserRouter>,







//Roles
<BrowserRouter>
        <Routes>
            <Route path='/' element={ <ShowRole />} />
            <Route path='/create' element={ <CreateRol />} />
            <Route path='/edit/:id' element={ <EditRol />} />            
        </Routes>
</BrowserRouter>