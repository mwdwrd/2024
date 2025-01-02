const Footer = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col border-t p-6 border-border justify-center text-xs font-mono uppercase tracking-wider gap-6">
      <div className="flex justify-between gap-6 w-full">
        <div className="flex-1 text-left">
          hello@tmp.studio<br />
          Brooklyn<br />
          New York 11249
        </div>
        <div className="flex-1">
          <div className="flex justify-between gap-16">
            <div className="flex-1 text-left">
              X<br />
              GitHub
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6 w-full opacity-40">
        <div className="flex-1 text-left">
          All Wrongs Reserved 2024
        </div>
        <div className="flex-1 text-left">
          Imprint
        </div>
      </div>
    </div>
  );
}

export default Footer;