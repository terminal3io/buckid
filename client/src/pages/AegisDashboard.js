import React, { useMemo, useState } from 'react'
import './AegisDashboard.scss'

const initialActivity = [
  { name: 'Studio North', detail: 'USDC · Ethereum', amount: '+ 840.00 USDC', time: 'Today, 10:42 AM', status: 'Confirmed', symbol: '↙', kind: 'in' },
  { name: 'Mira Chen', detail: 'ETH · Base', amount: '− 0.42 ETH', time: 'Yesterday, 4:18 PM', status: 'Confirmed', symbol: '↗', kind: 'out' },
  { name: 'Atlas Supply', detail: 'USDC · Ethereum', amount: '− 215.00 USDC', time: 'Oct 16, 9:06 AM', status: 'Pending', symbol: '↗', kind: 'out' },
]

const AegisDashboard = () => {
  const [activeView, setActiveView] = useState('Overview')
  const [showSend, setShowSend] = useState(false)
  const [showReceive, setShowReceive] = useState(false)
  const [sent, setSent] = useState(false)
  const [asset, setAsset] = useState('USDC')
  const [network, setNetwork] = useState('Ethereum')
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [filter, setFilter] = useState('')
  const [copied, setCopied] = useState(false)

  const activity = useMemo(() => {
    const rows = sent ? [{ name: recipient || 'New recipient', detail: `${asset} · ${network}`, amount: `− ${amount || '0'} ${asset}`, time: 'Just now', status: 'Awaiting approval', symbol: '↗', kind: 'out' }, ...initialActivity] : initialActivity
    return rows.filter((row) => `${row.name} ${row.detail} ${row.status}`.toLowerCase().includes(filter.toLowerCase()))
  }, [amount, asset, filter, network, recipient, sent])

  const openSend = () => { setSent(false); setShowSend(true); setShowReceive(false) }
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText('0x71C7...9a42')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      setCopied(false)
    }
  }

  return (
    <div className="aegis-app">
      <aside className="aegis-sidebar">
        <a className="aegis-brand" href="/" aria-label="AegisFlow home"><span className="brand-mark">A</span><span>Aegis<span className="brand-light">Flow</span></span></a>
        <div className="workspace-label">WORKSPACE</div>
        <nav className="aegis-nav" aria-label="Main navigation">
          {[['Overview', '⌂'], ['Payments', '↗'], ['Activity', '◷']].map(([label, icon]) => <button key={label} className={activeView === label ? 'nav-item active' : 'nav-item'} onClick={() => setActiveView(label)}><span className="nav-icon">{icon}</span>{label}{label === 'Activity' && <span className="nav-count">3</span>}</button>)}
        </nav>
        <div className="sidebar-bottom"><div className="help-card"><span className="help-icon">?</span><strong>Need a hand?</strong><span>Visit our help center</span></div><button className="profile-button"><span className="avatar">JD</span><span className="profile-copy"><strong>Jordan Davis</strong><small>Personal account</small></span><span className="chevron">⌄</span></button></div>
      </aside>

      <main className="aegis-main">
        <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>{activeView}</strong></div><div className="topbar-right"><span className="network-pill"><i /> Sepolia testnet</span><button className="wallet-button"><span className="wallet-dot" />0x71C7...9a42 <span className="chevron">⌄</span></button></div></header>
        <div className="page-content">
          <section className="welcome-row"><div><div className="eyebrow">MONDAY, OCTOBER 19, 2026 <span className="preview-tag">PREVIEW</span></div><h1>{activeView === 'Overview' ? 'Good morning, Jordan' : activeView}</h1><p className="subheading">A clear view of your digital asset payments.</p></div><div className="action-row"><button className="button button-secondary" onClick={() => { setShowReceive(true); setShowSend(false) }}><span>↓</span> Receive</button><button className="button button-primary" onClick={openSend}><span>↗</span> Send payment</button></div></section>

          <section className="balance-card"><div className="balance-main"><div className="card-label">TOTAL PORTFOLIO VALUE <span className="info-dot" title="Preview values are illustrative">i</span></div><div className="balance-value">$12,840<span>.50</span></div><div className="balance-caption"><span className="positive">↗ 2.4%</span> <span>over the last 30 days</span></div></div><div className="balance-divider"/><div className="asset-balance"><span className="coin-icon coin-usdc">$</span><span><strong>8,420.00 <small>USDC</small></strong><small>USD Coin</small></span><span className="asset-percent">65.6%</span></div><div className="asset-balance"><span className="coin-icon coin-eth">◆</span><span><strong>1.84 <small>ETH</small></strong><small>Ethereum</small></span><span className="asset-percent">34.4%</span></div><div className="balance-decoration" /></section>

          <section className="quick-actions"><button className="quick-action" onClick={openSend}><span className="quick-icon send-icon">↗</span><span><strong>Send payment</strong><small>Transfer to a wallet</small></span><b>→</b></button><button className="quick-action" onClick={() => { setShowReceive(true); setShowSend(false) }}><span className="quick-icon receive-icon">↓</span><span><strong>Receive funds</strong><small>Share your wallet details</small></span><b>→</b></button><div className="quick-note"><span className="shield-icon">✓</span><span><strong>You're in control</strong><small>Review every detail before approving.</small></span></div></section>

          <section className="activity-section"><div className="section-heading"><div><div className="eyebrow">YOUR PAYMENTS</div><h2>Recent activity</h2></div><div className="activity-tools"><label className="search-box"><span>⌕</span><input aria-label="Search activity" placeholder="Search activity" value={filter} onChange={(event) => setFilter(event.target.value)} /></label><button className="filter-button" onClick={() => setFilter('Pending')}>Filters <span>☷</span></button><button className="text-link" onClick={() => setActiveView('Activity')}>View all <span>→</span></button></div></div>
            <div className="activity-table"><div className="table-head"><span>PAYMENT</span><span>DATE</span><span>STATUS</span><span className="align-right">AMOUNT</span></div>{activity.length ? activity.map((item, index) => <div className="activity-row" key={`${item.name}-${index}`}><div className="payment-person"><span className={`transaction-icon ${item.kind}`}>{item.symbol}</span><span><strong>{item.name}</strong><small>{item.detail}</small></span></div><span className="activity-date">{item.time}</span><span><i className={`status-dot ${item.status === 'Confirmed' ? 'confirmed' : 'pending'}`} />{item.status}</span><strong className={`activity-amount ${item.kind === 'in' ? 'income' : ''}`}>{item.amount}</strong></div>) : <div className="empty-state">No activity matches your search.</div>}</div>
            <div className="table-foot"><span>Showing {activity.length} of {sent ? 4 : 3} payments</span><button onClick={() => setFilter('')}>Clear filters <span>×</span></button></div>
          </section>
          <p className="demo-disclaimer">Preview workspace · Balances and activity shown are illustrative and do not represent live blockchain data.</p>
        </div>
      </main>

      {(showSend || showReceive) && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setShowSend(false); setShowReceive(false) } }}><section className="payment-modal" role="dialog" aria-modal="true" aria-labelledby="payment-title"><button className="modal-close" onClick={() => { setShowSend(false); setShowReceive(false) }} aria-label="Close">×</button>{showReceive ? <><span className="modal-kicker">GET PAID</span><h2 id="payment-title">Receive funds</h2><p>Share your address and make sure the sender uses the same network.</p><label className="form-label">NETWORK<select value={network} onChange={(event) => setNetwork(event.target.value)}><option>Ethereum</option><option>Base</option></select></label><div className="address-box"><span>0x71C7...9a42</span><button onClick={copyAddress}>{copied ? 'Copied ✓' : 'Copy address'}</button></div><div className="modal-notice">Only send assets supported on {network}. Sending on another network may result in a permanent loss.</div></> : sent ? <><div className="success-mark">✓</div><span className="modal-kicker">PAYMENT PREVIEW</span><h2 id="payment-title">Ready for your review</h2><p>Your transfer details are prepared. Connect a wallet provider to authorize and submit a real transaction.</p><div className="review-summary"><span>Amount<strong>{amount || '0'} {asset}</strong></span><span>Network<strong>{network}</strong></span><span>Recipient<strong>{recipient || 'Not entered'}</strong></span><span>Estimated network fee<strong>~ 0.002 ETH</strong></span></div><button className="button button-primary modal-submit" onClick={() => setShowSend(false)}>Done</button></> : <><span className="modal-kicker">NEW TRANSFER</span><h2 id="payment-title">Send a payment</h2><p>Review the details carefully. Transactions cannot be reversed.</p><label className="form-label">RECIPIENT ADDRESS<input placeholder="Wallet address or ENS name" value={recipient} onChange={(event) => setRecipient(event.target.value)} /></label><div className="form-split"><label className="form-label">ASSET<select value={asset} onChange={(event) => setAsset(event.target.value)}><option>USDC</option><option>ETH</option></select></label><label className="form-label">NETWORK<select value={network} onChange={(event) => setNetwork(event.target.value)}><option>Ethereum</option><option>Base</option></select></label></div><label className="form-label">AMOUNT<input type="number" min="0" placeholder="0.00" value={amount} onChange={(event) => setAmount(event.target.value)} /></label><div className="fee-row"><span>Estimated network fee</span><strong>~ 0.002 ETH</strong></div><div className="modal-notice">This is a preview. No funds will move and no wallet approval is requested.</div><button className="button button-primary modal-submit" disabled={!recipient || !amount || Number(amount) <= 0} onClick={() => setSent(true)}>Review transfer <span>→</span></button></>}</section></div>}
    </div>
  )
}

export default AegisDashboard
