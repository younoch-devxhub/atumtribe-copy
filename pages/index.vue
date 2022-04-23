<template>
  <div class="w-full mx-auto">
    <!-- Section 1 -->
    <section
      class="relative flex justify-center w-full py-10 align-middle part-1"
    >
      <div class="container" id="bgImageSet">
        <main class="grid grid-cols-12 gap-5 py-6">
          <aside
            class="
              self-center
              col-span-12
              font-medium
              mt-20
              text-white
              md:col-span-6
            "
          >
            <h1 class="text-5xl text-center md:text-left">
              ATUM <span class="font-bold underline">Token</span>
            </h1>
            <h2 class="mt-2 text-3xl text-center lg:text-4xl md:text-left">
              where unity meets finance
            </h2>
            <p class="mt-5 font-normal">
              ATUM is a high performance defi token, our developers are
              visionaries seeking to innovate the rapid changing crypto
              ecosystem. Web 3.0 coupled with its own blockchain, will structure
              a secure system to foster a positive global change.
            </p>
            <div
              class="
                flex
                justify-center
                gap-4
                mx-auto
                mt-6
                text-sm
                font-normal
                lg:text-base lg:gap-3 lg:justify-start
              "
            >
              <button
                @click="gotoPdfViewPage"
                class="
                  px-6
                  py-3
                  text-blue-900
                  bg-white
                  rounded-md
                  cursor-pointer
                  whitepaperBtn
                "
              >
                White paper
              </button>
              <a
                href="#"
                class="
                  px-6
                  py-3
                  text-white
                  bg-blue-700
                  rounded-md
                  cursor-pointer
                "
                >Buy Token</a
              >
            </div>
          </aside>
          <div
            class="
              self-center
              col-span-10 col-start-2
              md:col-start-8 md:col-span-6
            "
          ></div>
        </main>
      </div>
    </section>
    <!-- Section 2 -->
    <section class="relative w-full part-2 section-2">
      <nuxt-img
        src="images/autum_overview_leftbg.svg"
        class="absolute top-0 left-0 h-4/5"
        style="z-index: -1"
        alt=""
      />
      <nuxt-img
        src="images/autum_overview_rightbg.svg"
        class="absolute top-0 right-0 h-1/2"
        style="z-index: -1"
        alt=""
      />
      <main
        class="container grid grid-cols-12 gap-5 pb-8 md:pt-14 lg:pt-20 lg:"
      >
        <figure
          class="
            col-span-10 col-start-2
            flex
            justify-center
            items-center
            md:col-start-0 md:col-span-6
          "
        >
          <nuxt-img class="img-para h-full w-full" src="images/about.jpg" />
        </figure>
        <aside class="col-span-12 font-medium md:col-span-6">
          <h1 class="text-2xl font-semibold lg:text-3xl">
            ATUM <span class="text-grad"> ABOUT US</span>
          </h1>

          <p class="mt-3 mb-8 text-sm font-normal lg:text-base">
            ATUM is a decentralized, utility-based token focused on Smart
            Contract acquisitions to increases value of the coin. Operated and
            supported by BLOCKCHAIN Technology. ATUM’s aim is to create the
            world’s best platform to purchase and protect assets. The Atum Token
            will utilize data collection & monetization for its holders using
            Distributed Ledger Technology. This will include copyrighting,
            trademarking, patents, Film production, Audio, MP3, MP4's music
            rights and licensing via Smart Contracts.<br />
            <br />

            All transactions within the blockchain are carried out utilizing the
            ATUM token, which is used to purchase the digital assets and via
            staking, open access to premium features.<br />
            <br />
            Within the app, users can connect to a secondary marketplace, where
            they will be able to buy, sell and trade to other members of the
            community. <br />
            <br />
            Users can display their digital assets in their personal showroom
            and create custom scenes with their digital assets and props. Within
            a social feed users can share their digital assets, Gala and scenes
            with the ATUM Asset community, who can comment and show
            appreciation.<br /><br />
            The Augmented Reality feature lets users interact with their digital
            assets in the real-world and even show them on social media.
            Eventually through ATUM’s in-app gameplay, assets will be able to
            interact with each other.
            <br />
            <br />
            ATUM Cyber Tech will deploy training modules including, coding, web
            3.0 development, financial development courses, digital asset
            generation, a much more. ATUM Cyber Tech will produce multi-platform
            video games, mobile, virtual and augment reality.
            <br />
            <br />
            ATUM Cyber Tech will conduct research and development in Bio
            Technology. Bio Synthetic science with robotics and genetic coding
            to advance Automation.
            <br />
            <br />
            ATUM will contribute to the impoverished communities in the Americas
            and throughout the world. ATUM ACADEMY will be a large education
            cloud to help issues the world into the next stages of development.
            ATUM Cyber Tech will highly impact creators' future.
            <br />
          </p>
        </aside>
      </main>
    </section>
    <!-- Timeline  section -->
    <section class="py-10 lg:mt-20 section-3">
      <div class="container">
        <h1 class="mb-5 text-2xl font-semibold text-center lg:text-3xl">
          ATUM <span class="text-grad"> ROADMAP</span>
        </h1>
        <div class="wrapper">
          <div class="center-line"></div>
          <div class="t-row rows-1">
            <section class="flex">
              <img
                class="z-0 transform translate-x-3 time-img"
                :src="stage1"
                alt=""
              />
              <div class="z-10 flex stage-content">
                <div
                  class="
                    flex
                    items-center
                    px-4
                    text-3xl
                    font-bold
                    text-center text-white
                    timeline-grad
                  "
                >
                  Stage <br />
                  1
                </div>
                <div class="p-2 timeline text-container">
                  <div class="flex items-center">
                    <img :src="check" class="inline-block mr-3" />
                    <span>ATUM GENISIS</span>
                  </div>
                  <div class="flex items-center">
                    <img :src="check" class="inline-block mr-3" />
                    <span>ATUM Website GOES LIVE</span>
                  </div>
                  <div class="flex items-center">
                    <img :src="check" class="inline-block mr-3" />
                    <span>White Paper Release & Publications</span>
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mr-3" />
                    <span
                      >Audit: system analysis; structure comprehension;
                      solidifying the purpose of the project</span
                    >
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mr-3" />
                    <span>Presale rollout live on Unicrypt.network</span>
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mr-3" />
                    <span>ATUM LIVE on PancakeSwap</span>
                  </div>
                  <div class="flex items-start">
                    <img :src="nonCheck" class="inline-block mt-1 mr-3" />
                    <span
                      >Base Marketing Push (Twitter, Discord, Telegram, and
                      Marketing push)</span
                    >
                  </div>
                  <div class="flex items-start">
                    <img :src="nonCheck" class="inline-block mt-1 mr-3" />
                    <span
                      >Partnership with influencer (i.e. Youtube,Twitter &
                      Telegram, Discord)</span
                    >
                  </div>
                  <div class="flex items-start">
                    <img :src="nonCheck" class="inline-block mt-1 mr-3" />
                    <span
                      >Community-focused contests, and exclusive giveaways</span
                    >
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mr-3" />
                    <span>ATUM NFT GALA</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="t-row rows-2">
            <section class="flex">
              <div class="z-10 flex justify-end stage-content">
                <div class="p-2 text-right timeline text-container">
                  <div class="flex items-start float-right">
                    <span
                      >Coin Market Cap initiative: adjustments for listing
                      including marketing & promotion</span
                    >
                    <img :src="check" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>ATUMVERSE Development</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Website upgrade ATUM 3.0</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="clear-both"></div>
                  <div class="flex items-start float-right">
                    <span>User Perks and Rewards</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Complete Social Media Upgrade and Restructure</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Bi-weekly donations evaluation</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Burn Token initiative meeting</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Smart contract Audit, Revision, and adjustment</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>Developers Headquarters acquisition</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-center
                    px-4
                    text-3xl
                    font-bold
                    text-center text-white
                    timeline-grad
                  "
                >
                  Stage <br />
                  2
                </div>
              </div>
              <img
                class="z-0 transform translate-x-3 time-img"
                style="transform: translateX(-12px)"
                :src="stage2"
                alt=""
              />
            </section>
          </div>
          <div class="t-row rows-1">
            <section class="flex">
              <img
                class="z-0 transform translate-x-3 time-img"
                :src="stage3"
                alt=""
              />
              <div class="z-10 flex stage-content">
                <div
                  class="
                    flex
                    items-center
                    px-4
                    text-3xl
                    font-bold
                    text-center text-white
                    timeline-grad
                  "
                >
                  Stage <br />
                  3
                </div>
                <div class="p-2 timeline text-container">
                  <div class="flex items-start">
                    <img :src="check" class="inline-block mt-1 mr-3" />
                    <span>Multichain (e.g. Uniswap listing)</span>
                  </div>
                  <div class="flex items-center">
                    <img :src="check" class="inline-block mt-1 mr-3" />
                    <span>Multichain (e.g. Uniswap listing)</span>
                  </div>
                  <div class="flex items-center">
                    <img :src="check" class="inline-block mt-1 mr-3" />
                    <span>ATUM Education Station</span>
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mt-1 mr-3" />
                    <span>ATUM Merch</span>
                  </div>
                  <div class="flex">
                    <img :src="nonCheck" class="inline-block mt-1 mr-3" />
                    <span>Strategic marketing campaign</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="t-row rows-2">
            <section class="flex">
              <div class="z-10 flex justify-end stage-content">
                <div class="p-2 text-right timeline text-container">
                  <div class="flex items-start float-right">
                    <span>ATUM Wallet</span>
                    <img :src="check" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="clear-both"></div>
                  <div class="flex items-start float-right">
                    <span>ATUM reward game</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>

                  <div class="flex items-start float-right">
                    <span
                      >Complete app development and launch on IOS/Android</span
                    >
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span
                      >Further, develop creative means to give back to
                      communities and charities</span
                    >
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="flex items-start float-right">
                    <span>NFT Drops Begin</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                  <div class="clear-both"></div>
                  <div class="flex items-start float-right">
                    <span>Incorporation of Legal entity</span>
                    <img :src="nonCheck" class="inline-block mt-1 ml-3" />
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-center
                    px-4
                    text-3xl
                    font-bold
                    text-center text-white
                    timeline-grad
                  "
                >
                  Stage <br />
                  4
                </div>
              </div>
              <img
                class="z-0 time-img"
                style="transform: translateX(-12px)"
                :src="stage4"
                alt=""
              />
            </section>
          </div>
        </div>
      </div>
    </section>
    <!-- Section 3 -->

    <!-- Section 4 -->
    <section class="relative flex justify-center w-full align-middle part-4">
      <nuxt-img
        src="images/blockchain_nft_tokens_bg2.svg"
        class="absolute bottom-0 right-0 sec4-bg"
      />
      <nuxt-img
        src="images/blockchain_nft_tokens_bg1.svg"
        class="absolute top-0 left-0 sec4-bg"
      />

      <main class="container grid items-center grid-cols-12 gap-5 lg:py-14">
        <figure class="col-span-10 col-start-2 md:col-start-0 md:col-span-6">
          <img class="img-para" src="images/My_Coin_1.gif" />
        </figure>
        <aside class="col-span-12 font-medium md:col-span-6">
          <div class="pb-6 my-6 sec4-article">
            <div class="flex items-center">
              <figure class="icon-grad">
                <img src="@/assets/Icons/tokens.png" />
              </figure>
              <p class="ml-3 text-xl font-semibold">
                ATUM <span class="text-grad"> Tokens </span>
              </p>
            </div>
            <p class="mt-3 ml-2 text-sm font-normal lg:ml-6 lg:text-base">
              In order to facilitate the purchase and trade of digital assets,
              ATUM Asset utilizes the ATUM token. There will only be 750 Billion
              ATUM tokens minted and these are purchased during the gestation,
              through the ATUM app, or on an exchange. The ATUM tokens will be a
              standard whereas the digital assets are (NFTs). When a purchase of
              a Asset is made, the ATUM tokens will be exchanged for the NFT.
              The NFT will be sent to the users ATUM app and become rightfully
              theirs, whilst the ATUM tokens used for the purchase are discarded
              to a locked address.
              <br />
              <br />
              The underlying economy of ATUM Asset is the ATUM Token. The token
              is needed for two reasons. Firstly, the sale and purchase of
              digital assets and secondly, access to extra features and beneﬁts
              within the app, such as the ’Master Asset Program’. When a
              purchase is made using ATUM tokens, the tokens involved in the
              transaction are exchanged for the digital Asset and then expire.
              After a successful purchase the invalid ATUM tokens are sent to an
              inaccessible smart contract where they reside permanently. ATUM
              Asset users can acquire ATUM Tokens using a credit or debit card,
              or where applicable, via an in-app purchase. When via in-app
              purchases, the payment will seamlessly purchase an amount of ATUM
              tokens (determined by the user) and once the ATUMs are acquired
              they are used to purchase the digital Asset. This process happens
              entirely in the background.
            </p>
          </div>

          <div class="pb-6 my-6 sec4-article">
            <div class="flex items-center">
              <figure class="icon-grad">
                <img src="@/assets/Icons/nft.png" />
              </figure>
              <p class="ml-3 text-xl font-semibold">
                Non Fungible Token <span class="text-grad"> (NFT) </span>
              </p>
            </div>
            <p class="mt-3 ml-6 text-sm font-normal lg:text-base">
              The digital assets oﬀered through ATUM Asset are NFTs. The NFT
              standard allows for veriﬁable digital scarcity with a proven
              authenticity and an immutable proof of ownership. NFT’s allow for
              more detailed attributes to be included, such as rich metadata
              about the asset and these authenticated details allow owners to be
              conﬁdent about the NFT’s authenticity and provenance.
            </p>
          </div>
        </aside>
      </main>
    </section>
    <!-- Section 5 -->
    <section class="relative flex justify-center w-full align-middle part-5">
      <main class="container grid grid-cols-12 py-6 gap-x-5 lg:py-14">
        <!-- <div class="col-span-12 my-6 lg:pb-6 md:col-span-6 sec5-article">
          <div class="flex items-center">
            <figure class="icon-grad">
              <img src="@/assets/Icons/scarcity.png" />
            </figure>
            <p class="mx-3 text-xl font-semibold">
              <span class="text-grad"> Tokens </span>
            </p>
          </div>
          <p class="mt-3 text-sm font-normal lg:text-base">
            ATUM digital assets are released in a limited number of batches,
            called ‘Series’. A Series may, for example, have ten thousand
            digital assets and within this Series the digital assets are divided
            across ﬁve rarity categories, ranging from ‘Common’, (representing
            62% of the total) through to ‘A-Rare’ (representing 1%). The
            Blockchain and NFT standard is used to generate these limited number
            of digital assets.
          </p>
        </div> -->
        <div class="col-span-12 my-6 lg:pb-6 md:col-span-6 sec5-article">
          <div class="flex items-center">
            <figure class="icon-grad">
              <img src="@/assets/Icons/transfer.png" />
            </figure>
            <p class="mx-3 text-xl font-semibold">
              Peer-to-Peer
              <span class="text-grad"> Transfer </span>
            </p>
          </div>
          <p class="mt-3 text-sm font-normal lg:text-base pl-5">
            To facilitate eﬀortless buying, selling and trading of digital
            assets amongst users within the app, ATUM Asset leverages blockchain
            for the trustless transfer of digital assets between users. When a
            transfer happens, ownership is immediately transferred to the new
            owner and the previous owner will no longer have access to the
            digital Asset.
          </p>
        </div>
        <div class="col-span-12 my-6 lg:pb-6 md:col-span-6 sec5-article">
          <div class="flex items-center">
            <figure class="icon-grad">
              <img src="@/assets/Icons/transfer.png" />
            </figure>
            <p class="mx-3 text-xl font-semibold">
              ATUM
              <span class="text-grad"> Asset </span>
            </p>
          </div>
          <p class="mt-3 text-sm font-normal lg:text-base pl-5">
            Assets have existed throughout human history and today they come in
            many forms. Currently the virtual goods market is valued at $52
            Billion annually and growing rapidly. We ourselves hold a reserve of
            gold, silver, precious stones, patent land, art, music and other
            various forms of DATA. ATUM token has arrived as traditional banking
            systems for investments have become stagnant. Investors really want
            to see their money work for them. Smart contracts and staking are a
            few features that secure assets in perpetuity.
          </p>
        </div>
        <div class="col-span-12 pb-6 my-6 md:col-span-6 sec5-article">
          <div class="flex items-center">
            <figure class="icon-grad">
              <img src="@/assets/Icons/transfer.png" />
            </figure>
            <p class="mx-3 text-xl font-semibold">
              Counterfeit
              <span class="text-grad"> Protection </span>
            </p>
          </div>
          <p class="mt-3 text-sm font-normal lg:text-base pl-5">
            A key advantage of using the Blockchain for digital assets is that
            each Asset is a uniquely generated asset that cannot be duplicated.
            Each digital Asset is recorded in the Blockchain and ties ownership
            directly to the veriﬁed owner.
          </p>
        </div>
        <div class="col-span-12 my-6 lg:pb-6 md:col-span-6 sec5-article">
          <figure
            class="
              col-span-10 col-start-2
              md:col-start-0
              flex
              justify-center
              md:col-span-6
              mt-1
              items-center
            "
          >
            <nuxt-img
              class="img-para w-5/6"
              src="images/counterfeitProtection.png"
            />
          </figure>
        </div>
      </main>
    </section>
    <!-- Section 6 -->

    <!-- Section 7 -->
    <section class="relative flex justify-center w-full align-middle part-7">
      <main class="container grid grid-cols-12 gap-5 py-6">
        <aside class="col-span-12 font-medium md:col-span-6">
          <h1 class="text-2xl font-semibold lg:text-3xl">
            <span class="text-grad"> TECHNOLOGY </span>
          </h1>

          <p class="mt-3 text-sm font-normal lg:text-base">
            <span class="font-semibold"
              >Blockchain Protocol and Contract Standards</span
            >
            <br />

            Due to the throughput and congestion issues that currently plague
            the Ethereum network, ATUM Asset will be deploying the ATUM token
            and the digital Asset NFT contracts on the network. The ATUM NFT
            smart contract will be compatible with the ERC20 token standard.
            <br />
            <br />
            <span class="font-semibold">Minting and Generation</span> <br />

            When new digital assets are created they are done so by minting a
            new NFT in our blockchain contract. Each NFT is provided with an
            associated URI which links that NFT to a set of metadata which
            includes the Asset name, licensor, brand, series and links to the
            NFT’s various digital assets (such as clothing, props, etc). ATUM
            will host the publicly accessible JSON API containing the metadata
            for each NFT’s URI. Digital Exchange Platform and NFT Ownership
            After the minting of each NFT, the ownership is sent to an address
            assigned to ATUM for security and management on behalf of the owner.
            The ATUM Asset platform operates as a hybrid model whereby ATUM
            maintains ownership of all assets within the system, as is a common
            practice among digital exchange platforms. The ATUM Asset platform
            will maintain centralized ownership records as users buy, sell and
            trade NFTs. Additionally, all transactions in our system require
            signing authorization from either the user’s app or their Asset
            Digital Hardware Wallet. This hybrid approach allows ATUM to provide
            users with a streamlined experience within the ATUM Asset app, while
            still leveraging the power of Distributed Ledger Technology for ATUM
            digital assets.
          </p>
        </aside>
        <figure
          class="
            col-span-10 col-start-2
            md:col-start-0
            flex
            justify-center
            md:col-span-6
            mt-1
            items-center
          "
        >
          <nuxt-img class="img-para w-5/6" src="images/technology.png" />
        </figure>
      </main>
    </section>
    <!-- Section 8 -->

    <!-- Section 9 -->
    <section
      class="relative flex justify-center w-full pb-8 align-middle part-9"
    >
      <main class="container grid grid-cols-12 gap-5 py-6">
        <div class="grid grid-cols-2 col-span-8 py-6 mt-6 gap-y-6">
          <nuxt-img src="atum-token/icon/card1.svg" />
          <nuxt-img src="atum-token/icon/card2.svg" />
          <nuxt-img src="atum-token/icon/card3.svg" />
          <nuxt-img src="atum-token/icon/card4.svg" />
        </div>
        <div class="col-span-12 py-6 mt-16 font-medium md:col-span-4">
          <h1 class="text-2xl font-semibold lg:text-3xl">
            <span class="text-grad"> TOKENOMICS </span>
          </h1>

          <p class="mt-5 text-sm font-normal lg:text-base">
            The underlying economy of ATUM Asset is the ATUM Token. The prime
            focus of the ATUM token are as follows. First, the sale and purchase
            of secure digital assets. Secondly, as an ATUM token holder you will
            be granted access to extra features and beneﬁts within the app
            itself. “The Master Asset Program” will feature early access on
            digital releases, limited editions and staking via “The UNIT” an
            integrated in app wallet.
            <br />
            <br />
            When a purchase is made using ATUM tokens, the tokens involved in
            the transaction are exchanged for the digital Asset and then expire.
            After a successful purchase, the invalid ATUM tokens are sent to an
            inaccessible smart contract where they reside permanently.
          </p>
        </div>
      </main>
    </section>
    <!-- <section id="about-us" class="relative my-10 lg:my-20 part-10">
      <h1 class="text-2xl font-bold text-center lg:text-3xl">
        <span class="text-grad"> Reviews</span>
      </h1>
      <svg
        class="max-w-sm mx-auto mt-16 -mb-6 lg:-mb-9"
        width="117"
        height="93"
        viewBox="0 0 117 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M107.069 79.6777C118.099 67.7738 116.989 52.4869 116.954 52.3125V34.875V5.8125C116.954 2.604 114.341 0 111.108 0H76.0341C69.5864 0 64.3429 5.21381 64.3429 11.625V52.3125C64.3429 55.521 66.9559 58.125 70.1885 58.125H76.0341H88.1814C88.0586 60.4616 87.4624 63.426 85.6736 66.2393C82.704 70.8951 77.1097 74.0745 69.0369 75.6787L64.3429 76.6087V93H70.1885C86.4569 93 98.8672 88.5186 107.069 79.6777ZM42.7257 79.6777C53.7623 67.7738 52.6458 52.4869 52.6107 52.3125V34.875V5.8125C52.6107 2.604 49.9977 0 46.7651 0H11.6913C5.24353 0 0 5.21381 0 11.625V52.3125C0 55.521 2.613 58.125 5.84563 58.125H11.6913H23.8385C23.7157 60.4616 23.1195 63.426 21.3307 66.2393C18.3611 70.8951 12.7669 74.0745 4.69404 75.6787L0 76.6087V93H5.84563C22.114 93 34.5243 88.5186 42.7257 79.6777Z"
          fill="url(#paint0_linear_224_90)"
          fill-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_224_90"
            x1="0"
            y1="0"
            x2="94.4043"
            y2="112.039"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2842EF" />
            <stop offset="1" stop-color="#A25FFD" />
          </linearGradient>
        </defs>
      </svg>

      <div class="h-full gap-8 pb-10 mx-auto md:container md:flex">
        <carousel
          :per-page-custom="[
            [320, 1],
            [768, 2],
            [1199, 3],
            [1580, 3],
          ]"
          :autoplay="true"
          autoplayDirection="forward"
          autoplayHoverPause
          :autoplayTimeout="4000"
          loop
          paginationActiveColor="#E4801D"
          :paginationSize="12"
          paginationPosition="bottom-overlay"
          class="w-full h-96"
        >
          <slide
            class="h-full my-10"
            v-for="(slide, index) in sliders"
            :key="index"
          >
            <AboutUsCard :slider="slide" class="mx-3" />
          </slide>
        </carousel>
      </div>
    </section> -->
    <!-- section 11 -->
    <section id="about-us" class="relative my-10 lg:my-20 part-10">
      <div class="container">
        <h1 class="mb-12 text-2xl font-bold text-center lg:text-3xl">
          <span class="text-grad"> AS SEEN ON </span>
        </h1>
        <div>
          <carousel
            :per-page-custom="[
              [320, 2],
              [768, 3],
              [1199, 4],
              [1580, 4],
            ]"
            :autoplay="true"
            autoplayDirection="forward"
            autoplayHoverPause
            :autoplayTimeout="4000"
            loop
            paginationActiveColor="#E4801D"
            :paginationSize="12"
            paginationPosition="bottom-overlay"
            class="
              grid
              justify-center
              gap-4
              h-80
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            "
          >
            <slide>
              <nuxt-img src="images/partner1.jpg" />
            </slide>
            <slide>
              <nuxt-img src="images/partner2.jpg" />
            </slide>
            <slide>
              <nuxt-img src="images/partner3.jpg" />
            </slide>
            <slide>
              <nuxt-img src="images/partner5.jpg" />
            </slide>
            <slide>
              <nuxt-img src="images/partner6.jpg" />
            </slide>
            <slide>
              <nuxt-img src="images/partner7.jpg" />
            </slide>
          </carousel>
        </div>
      </div>
    </section>
    <Footer class="mx-auto" />
  </div>
</template>

<script>
import testimonial1 from '@/static/images/testimonial1.png'
import testimonial2 from '@/static/images/testimonial2.png'
import testimonial3 from '@/static/images/testimonial3.png'

import nonCheck from '@/assets/Icons/non-check.svg'
import check from '@/assets/Icons/check_box_l.svg'
import stage1 from '@/assets/Icons/stage1.svg'
import stage2 from '@/assets/Icons/stage2.svg'
import stage3 from '@/assets/Icons/stage3.svg'
import stage4 from '@/assets/Icons/stage4.svg'
export default {
  data() {
    return {
      check: check,
      nonCheck: nonCheck,
      stage1: stage1,
      stage2: stage2,
      stage3: stage3,
      stage4: stage4,

      sliders: [
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Robert Fox',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial1,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Leslie Alexander',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: true,
          avatar: testimonial2,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Cody Fisher',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial3,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Robert Fox',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial1,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Leslie Alexander',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: true,
          avatar: testimonial2,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Cody Fisher',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial3,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Robert Fox',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial1,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Leslie Alexander',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: true,
          avatar: testimonial2,
        },
        {
          paragraph: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
          name: 'Cody Fisher',
          title: `CEO, Parkview Int. Ltd.`,
          gradbg: false,
          avatar: testimonial3,
        },
      ],
    }
  },
  methods: {
    gotoPdfViewPage() {
      this.$router.push('/pdf')
    },
  },
}
</script>
<style scoped>
#bgImageSet {
  background-image: url('assets/images/hero.png');
  height: 516px;
  position: relative;
  top: -20px;
  width: 100%;
  background-repeat: no-repeat;
}

.h-576px {
  height: 576px;
}

.whitepaperBtn {
  line-height: 1.2;
}

/* Section 1  */
.part-1 {
  @apply w-full;
  background: conic-gradient(
    from 4.18deg at 57.37% 52.33%,
    #a25ffd -33.33deg,
    #2842ef 10.72deg,
    #a25ffd 326.67deg,
    #2842ef 370.72deg
  );
}
/* section 2 */
.section-2 {
  background: linear-gradient(
    57.13deg,
    rgba(40, 66, 239, 0.3) -11.55%,
    rgba(255, 255, 255, 0) 53.85%
  );
}
.section-2 .absolute {
  @media screen and (max-width: 1080px) {
    display: none;
  }
}
/* section 3 */
.part-3 {
  background: #fcfcfc;
}
.part-2 p,
.part-3 p,
.part-4 p,
.part-5 p,
.part-6 p,
.part-7 p,
.part-8 p,
.part-9 p {
  color: #121212;
}

.img-para {
  max-height: 480px;
}
/* section 3 */
.section-3 {
  background: #fcfcfc;
}
.list-sec-3 {
  color: #2842ef;
}
/* section 4 */
.sec4-bg {
  height: 80%;
  z-index: -1;
  max-width: 20%;
}
.sec4-article {
  background: #fbf9fe;
}

/* section 5 */
.part-5 {
  background: #fcfcfc;
}
.sec4-article {
  background: #fbf9fe;
}

/* section 6 */
.part-6 {
  background: white;
}
/* section 7 */
.part-7 {
  background: white;
}
/* section 8 */
.part-8 {
  background: #fcfcfc;
}
.part-9 {
  background: #fcfcfc;
}
.VueCarousel-dot--active,
.VueCarousel-dot {
  background: black !important;

  padding: 0 !important;
  margin: 0 2px;
}
.VueCarousel-dot--active {
  background: #2842ef !important;
}

/* Timeline Styleing */

.wrapper {
  margin: 50px auto;
  padding: 0 20px;
  position: relative;
}

.wrapper .center-line {
  position: absolute;
  height: 100%;
  width: 8px;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 0.01%,
    #2842ef 14.24%,
    #2842ef 51.78%,
    #2842ef 79.17%,
    rgba(255, 255, 255, 0.2) 100%
  );
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.wrapper .t-row {
  display: flex;
  justify-content: flex-start;
}
.wrapper .rows-1 {
  justify-content: flex-end;
}
.wrapper .rows-2 {
  justify-content: flex-start;
}

.wrapper .t-row section {
  background: #fff;
  border-radius: 5px;
  /* width: calc(50% - 40px); */
  width: 52.42%;
  padding: 20px 0;
  position: relative;
}

.wrapper .t-row section::before {
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;

  top: 28px;
  z-index: -1;
  transform: rotate(45deg);
}

.rows-1 section::before {
  right: -7px;
}
.rows-2 section::before {
  left: -7px;
}

.wrapper .t-row section .details,
.wrapper .t-row section .bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper .t-row section .time-img {
  z-index: 3;
}
.wrapper .t-row section .details .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stage-content div {
  @apply my-1;
}
.timeline-grad {
  background: linear-gradient(133.33deg, #2842ef 0%, #a25ffd 100%);
  mix-blend-mode: normal;
}
.points {
  background: #2842ef;

  border-radius: 3px;
}
</style>
