// ======= Configuração (quando for integrar com Supabase) =======
'ADM': 'dashboards/adm.html',
'FUNCIONARIO': 'dashboards/funcionario.html',
'CLIENTE': 'dashboards/cliente.html'
}


// Mock para testes locais (remova ao integrar com Supabase)
const MOCK_USERS = {
'adm@acquashow.com': { password: '123456', role: 'ADM', nome: 'Admin' },
'func@acquashow.com': { password: '123456', role: 'FUNCIONARIO', nome: 'Funcionário' },
'cliente@acquashow.com': { password: '123456', role: 'CLIENTE', nome: 'Cliente' },
}


async function fakeLogin(email, password) {
const u = MOCK_USERS[email]
if (!u || u.password !== password) throw new Error('E-mail ou senha inválidos.')
// Simula "session"
const session = { user: { id: 'mock-user-id', email }, profile: { role: u.role, nome: u.nome } }
localStorage.setItem('session', JSON.stringify(session))
return session
}


async function redirectByRole(role) {
const dest = DASHBOARD_ROUTES[role]
if (!dest) throw new Error('Papel inválido ou não mapeado: ' + role)
window.location.href = dest
}


async function handleLogin(evt) {
evt.preventDefault()
const email = document.getElementById('email').value.trim()
const password = document.getElementById('password').value
const msg = document.getElementById('loginMsg')
msg.textContent = ''


try {
// ============= MODO SIMULADO (MVP local) =============
const session = await fakeLogin(email, password)
await redirectByRole(session.profile.role)


// ============= MODO REAL (Supabase) =============
// 1) Autenticar
// const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({ email, password })
// if (signInError) throw signInError
// 2) Descobrir o papel no perfil
// const { data: profile, error: profErr } = await supabase.from('profiles').select('role, nome').eq('id', signInData.user.id).single()
// if (profErr) throw profErr
// 3) Redirecionar
// await redirectByRole(profile.role)
} catch (e) {
msg.textContent = e.message || 'Falha no login.'
}
}


document.getElementById('loginForm').addEventListener('submit', handleLogin)