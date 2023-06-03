import classes from '../../UI/global.module.css'

const Contact = () => {
    return (
        <div>
           <p><a className={classes['nav']} target='_blank' href="https://www.linkedin.com/in/zor-karapetyan-90152a277/">LinkedIn</a></p>
           <p><a className={classes['nav']} target='_blank' href="https://www.instagram.com/kaarapetyyan/">Instagram</a></p>
           <p><a className={classes['nav']} target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCBBdqBXGxVrmFTStcnnkChFWLTCwHcdnndvZRqmcPsRRvLCZFcJtHwlJJGKscSPDwRNZL">Gmail</a></p>
        </div>
    )
}

export default Contact